import type { NextPage } from "next";
import classes from "../styles/Home.module.css";
import Container from "../components/Layout/Container";
import getConfig from "next/config";
import Hero from "../components/Home/Hero";
import Info from "../components/Home/Info";
import Games from "../components/Home/Games";


const Home: NextPage = ({ words }: any) => {
  return (
    <Container>
      <div className={classes.home}>
        <Hero words={words} />
        <Info word={words[23]} />
        <Games />
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
