import type { NextPage } from "next";
import { useState, useEffect } from "react";
import classes from "../styles/Home.module.css";
import Container from "../components/Container";
import NextLink from "next/link";
import getConfig from "next/config";
import { useRouter } from "next/router";
import { IWord } from "../types";

const Home: NextPage = ({ words }: any) => {
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
    <Container>
      <div className={classes.home}>
        <section className={classes.hero}>
          <div className={classes.hero__title}>
            <h1>Hachiko Dictionary</h1>
            <p>Where everything makes sense.</p>
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

        <section className={classes.homebelow}>
          <div className={classes.wordoftheday}>
            <h2>
              {words[9].title}
              <span className={classes.actualkind}>verb</span>
            </h2>

            <p>{words[9].description}</p>
          </div>
          <div className={classes.hachikodictionary}>
            <p>
              <span className={classes.brandname}>Hachiko Dictionary</span> is
              more a learning project than an actual dictionary. Most of the
              words are taken from reliable sources like{" "}
              <a
                className={classes.externallink}
                href="https://www.merriam-webster.com"
                target="_blank"
                rel="noreferrer"
              >
                Merriam Webster
              </a>{" "}
              and{" "}
              <a
                className={classes.externallink}
                href="https://dictionary.cambridge.org"
                target="_blank"
                rel="noreferrer"
              >
                Cambridge Dictionary
              </a>
              .
            </p>
          </div>
        </section>
      </div>
    </Container>
  );
};

export const getStaticProps = async () => {
  const { publicRuntimeConfig } = getConfig();
  const res = await fetch(`${publicRuntimeConfig.GET_WORDS}`);
  const words = await res.json();

  return {
    props: {
      words,
    },
  };
};

export default Home;
