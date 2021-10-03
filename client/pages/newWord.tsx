import Container from "../components/Container";
import classes from "../styles/newword.module.css";
import type { NextPage } from "next";
import { useState } from "react";
import getConfig from "next/config";
import { createWord } from "../lib/dictionary";
import { IWord } from "../types";

const NewWord: NextPage = () => {
  const [word, setWord] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [kind, setKind] = useState<string>("");
  const [synonyms, setSynonyms] = useState<string>("");
  const [antonyms, setAntonyms] = useState<string>("");
  const [examples, setExamples] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const { publicRuntimeConfig } = getConfig();

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const allDescriptions = desc.split("--");
      const allSynonyms = synonyms.split(", ");
      const allAntonyms = antonyms.split(", ");
      const allSentences = examples.split("--");

      if (pass == publicRuntimeConfig.password) {
        createWord({
          title: word,
          description: allDescriptions,
          kind: kind,
          synonyms: allSynonyms,
          antonyms: allAntonyms,
          sentences: allSentences,
        });
        setMessage(`${word} is successfully added.`);
      } else {
        console.log("do you think you are smart?");
        setWord("");
        setDesc("");
        setKind("");
        setSynonyms("");
        setAntonyms("");
        setExamples("");
      }
    } catch (error: any) {
      console.log("Error creating word", error.message);
    }
  };

  return (
    <Container>
      <div className={classes.notify}>{message ? <h2>{message}</h2> : ""}</div>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.inputcontainer}>
          <label htmlFor="word">Word</label>
          <input
            type="text"
            id="word"
            value={word}
            onChange={(e) => {
              setWord(e.target.value);
            }}
          />
        </div>

        <div className={classes.inputcontainer}>
          <label htmlFor="desc">Description(--)</label>
          <textarea id="desc" onChange={(e) => setDesc(e.target.value)} />
        </div>

        <div className={classes.inputcontainer}>
          <label htmlFor="kind">Kind</label>
          <textarea id="kind" onChange={(e) => setKind(e.target.value)} />
        </div>

        <div className={classes.inputcontainer}>
          <label htmlFor="synonyms">Synonyms (,)</label>
          <textarea
            id="synonyms"
            onChange={(e) => setSynonyms(e.target.value)}
          />
        </div>

        <div className={classes.inputcontainer}>
          <label htmlFor="antonyms">Antonyms(,)</label>
          <textarea
            id="antonyms"
            onChange={(e) => setAntonyms(e.target.value)}
          />
        </div>

        <div className={classes.inputcontainer}>
          <label htmlFor="examples">Example Sentences(--)</label>
          <textarea
            id="examples"
            onChange={(e) => setExamples(e.target.value)}
          />
        </div>
        <div className={classes.inputcontainer}>
          <label htmlFor="password">Iaian Reid</label>
          <input type="text" onChange={(e) => setPass(e.target.value)} />
        </div>
        <button type="submit">Send</button>
      </form>
    </Container>
  );
};

export default NewWord;
