import Container from "../../components/Container";
import getConfig from "next/config";
import axios from "axios";
import {useState, useEffect} from "react";

const Words = () => {

  const [mounted, setMounted] = useState<boolean>(false);
  const [words, setWords] = useState<any[]>([]);  
  const {publicRuntimeConfig} = getConfig();

  async function getAllWords() {

    return await axios.get(`${publicRuntimeConfig.GET_WORDS}`).then((res) => setWords(res.data))
  }
  
  useEffect(() => {
    setMounted(true);
    getAllWords()
  }, [words])
  return(
    <Container>
      <div>
        <ul>
          {mounted && words.map((word) => (
            <li key={word._id}>
              <h1>{word.title}</h1>
              <p>{word.kind}</p>
              <p>{word.description}</p>
              <ul>
                {word.synonyms.map((el: any) => <li key={el}>{el}</li>)}
                </ul>
                 <ul>
                {word.antonyms.map((el: any) => <li key={el}>{el}</li>)}
                </ul>
              <ul>
                {word.sentences.map((el: string) => <li key={el}>{el}</li>)}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}


export default Words;
