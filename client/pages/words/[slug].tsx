import Container from "../../components/Container";
import { GetStaticPaths, GetStaticProps } from "next";
import classes from "../../styles/wordpage.module.css";
import { getSingleWord, getAllWords } from "../../lib/dictionary";

const Word = (word: any) => {
  return (
    <Container>
      <div className={classes.singlewordpage}>
        <div className={classes.singleword}>
          <div className={classes.singleword__word}>
            <h1>{word.word[0].title}</h1>
          </div>
          <div className={classes.singleword__kind}>
            <p>{word.word[0].kind}</p>
          </div>
          <div className={classes.sectiontitle}>Definition</div>
          <ul className={classes.singleword__desc}>
            {word.word[0].description.map((el: any, i: number) => (
              <li key={el}>
                {i + 1}.{el}
              </li>
            ))}
          </ul>

          <div className={classes.sectiontitle}>Synonyms</div>
          {word.word[0].synonyms.length >= 2 ? (
            <ul className={classes.singleword__syn}>
              {word.word[0].synonyms.map((el: any) => (
                <li key={el}>{el}</li>
              ))}
            </ul>
          ) : (
            ""
          )}

          <div className={classes.sectiontitle}>Antonyms</div>
          {word.word[0].antonyms.length >= 2 ? (
            <ul className={classes.singleword__ant}>
              {word.word[0].antonyms.map((el: any) => (
                <li key={el}>{el}</li>
              ))}
            </ul>
          ) : (
            ""
          )}

          <div className={classes.sectiontitle}>Sentences</div>
          <ul className={classes.singleword__sentences}>
            {word.word[0].sentences.map((el: string) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const words = await getAllWords();
  const paths = words.map((word: any) => ({
    params: { slug: word.title.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const word = await getSingleWord(params.slug);
  return {
    props: {
      word,
    },
  };
};

export default Word;
