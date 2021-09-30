import Container from "../../components/Container";
import getConfig from "next/config";
import axios from "axios";
import { useState, useEffect } from "react";
import WordCard from "../../components/WordCard";
import classes from "../../styles/allwords.module.css";

const Words = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [words, setWords] = useState<any[]>([]);
  const { publicRuntimeConfig } = getConfig();

  async function getAllWords() {
    return await axios
      .get(`${publicRuntimeConfig.GET_WORDS}`)
      .then((res) => setWords(res.data));
  }

  useEffect(() => {
    setMounted(true);
    getAllWords();
  }, [words]);
  return (
    <Container>
      <div className={classes.allwords}>
        <h1>Some words that I am supposed to know.</h1>
        <ul className={classes.allwords__list}>
          {mounted &&
            words.map((word) => (
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

export default Words;
