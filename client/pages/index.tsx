import type { NextPage } from "next";
import { useState } from "react";
import classes from "../styles/Home.module.css";
import Container from "../components/Container";
import NextLink from "next/link"

const Home: NextPage = () => {
  const [searchParams, setSearchParams] = useState<string>("");
  

  return (
    <Container>
      <div className={classes.home}>
        <div className={classes.hero}>
          <div className={classes.hero__title}>
            <h1>Hachiko Dictionary</h1>
            <p>Where everything makes sense.</p>
          </div>
          <div className={classes.hero__input}>
            <input
              type="text"
              placeholder="Search Words"
              onChange={(e) => setSearchParams(e.target.value)}
            />
            <NextLink href={`/words/${searchParams}`}>
              <a>
                S
              </a>
            </NextLink>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
