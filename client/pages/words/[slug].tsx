import Container from "../../components/Container";
import getConfig from "next/config";
import { GetStaticPaths, GetStaticProps } from "next";
import classes from "../../styles/wordpage.module.css";

const Word = (word: any) => {
  return (
    <Container>
      <div className={classes.singleword}>
        <div className={classes.singleword__word}>
          <h1>{word.word[0].title}</h1>
        </div>
        <div className={classes.singleword__kind}>
          <p>{word.word[0].kind}</p>
        </div>
        <ul className={classes.singleword__desc}>
          {word.word[0].description.map((el: any) => (
            <li key={el}>{el}</li>
          ))}
        </ul>

        {word.word[0].synonyms.length >= 2 ? (
          <ul className={classes.singleword__syn}>
            {word.word[0].synonyms.map((el: any) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        ) : (
          ""
        )}

        {word.word[0].antonyms.length >= 2 ? (
          <ul className={classes.singleword__ant}>
            {word.word[0].antonyms.map((el: any) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        ) : (
          ""
        )}

        <ul className={classes.singleword__sentences}>
          {word.word[0].sentences.map((el: string) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { publicRuntimeConfig } = getConfig();
  const res = await fetch(`${publicRuntimeConfig.GET_WORDS}`);
  const words = await res.json();
  const paths = words.map((word: any) => ({
    params: { slug: word.title.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { publicRuntimeConfig } = getConfig();
  const res = await fetch(`${publicRuntimeConfig.GET_WORD}/${params.slug}`);
  const word = await res.json();
  return {
    props: {
      word,
    },
  };
};

export default Word;
