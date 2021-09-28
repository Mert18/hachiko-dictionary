import Container from "../components/Container";
import classes from "../styles/newword.module.css";
import type { NextPage } from "next";
import { useState } from "react";
import axios from "axios";

const NewWord: NextPage = () => {
  const [word, setWord] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [kind, setKind] = useState<string>("");
  const [synonyms, setSynonyms] = useState<string>("");
  const [antonyms, setAntonyms] = useState<string>("");
  const [examples, setExamples] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  let myPass = process.env.password;

  const submitHandler = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/dictionary/createWord", {
        title: word,
        description: desc,
        kind: kind,
        synonyms: synonyms,
        antonyms: antonyms,
        sentences: examples,
      });
    } catch (error: any) {
      console.log("Error creating word", error.message);
    }
  };

  return (
    <Container>
      <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes.inputcontainer}>
          <label htmlFor="word">Word</label>
          <input
            type="text"
            id="word"
            onChange={(e) => {
              setWord(e.target.value);
            }}
          />
        </div>

        <div className={classes.inputcontainer}>
          <label htmlFor="desc">Description</label>
          <textarea id="desc" onChange={(e) => setDesc(e.target.value)} />
        </div>

        <div className={classes.inputcontainer}>
          <label htmlFor="kind">Kind</label>
          <textarea id="kind" onChange={(e) => setKind(e.target.value)} />
        </div>

        <div className={classes.inputcontainer}>
          <label htmlFor="synonyms">Synonyms</label>
          <textarea
            id="synonyms"
            onChange={(e) => setSynonyms(e.target.value)}
          />
        </div>

        <div className={classes.inputcontainer}>
          <label htmlFor="antonyms">Antonyms</label>
          <textarea
            id="antonyms"
            onChange={(e) => setAntonyms(e.target.value)}
          />
        </div>

        <div className={classes.inputcontainer}>
          <label htmlFor="examples">Example Sentences</label>
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
