import Container from "../../components/Container";
import { useState } from "react";
import { GetStaticProps } from "next";
import WordCard from "../../components/WordCard";
import classes from "../../styles/allwords.module.css";
import { getAllWords } from "../../lib/dictionary";
import { IWord } from "../../types";

const Words = ({ words }: any) => {
  const [mywords, setMyWords] = useState(
    words.sort(function (a: IWord, b: IWord) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    })
  );

  return (
    <Container>
      <div className={classes.allwords}>
        <h1>Some words that I am supposed to know.</h1>
        <ul className={classes.allwords__list}>
          {mywords.map((word: any) => (
            <WordCard
              _id={word._id}
              kind={word.kind}
              synonyms={word.synonyms}
              antonyms={word.antonyms}
              key={word._id}
              title={word.title}
              description={word.description}
              sentences={word.examples}
              created_at={word.created_at}
              updated_at={word.updated_at}
            />
          ))}
        </ul>
      </div>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const words = await getAllWords();
  return {
    props: {
      words,
    },
  };
};

export default Words;
