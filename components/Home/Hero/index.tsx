import classes from "./Hero.module.css";
import NextLink from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { IWord } from "../../../types";

const Hero = ({ words }: any) => {
  const router = useRouter();
  const [searchParams, setSearchParams] = useState<string>("");
  const [results, setResults] = useState<IWord[] | null>([]);
  useEffect(() => {
    if (searchParams == "") {
      setResults([]);
    } else {
      setResults(words.filter((el: any) => el.title.startsWith(searchParams)));
    }
  }, [searchParams]);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/words/${searchParams}`);
  };

  return (
    <section className={classes.hero}>
      <div className={classes.hero__title}>
        <h1>Hachiko Dictionary</h1>
        <p>Where everything makes sense</p>
      </div>
      <div className={classes.hero__input}>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search Words"
            onChange={(e) => setSearchParams(e.target.value)}
          />
        </form>

        {results!.length >= 1 ? (
          <ul className={classes.results}>
            {results!.map((res: any) => (
              <li key={res._id} className={classes.result}>
                <NextLink href={`/words/${res.title}`}>
                  <a>
                    <p className={classes.actualword}>
                      {res.title}
                      <span className={classes.actualkind}>{res.kind}</span>
                    </p>
                  </a>
                </NextLink>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Hero;
