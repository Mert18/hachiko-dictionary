import NextLink from "next/link";
import { IWord } from "../types";
import classes from "./styles/wordcard.module.css";

const WordCard = ({ title, description }: IWord) => {
  return (
    <li key={title} className={classes.wordcard}>
      <h2 className={classes.wordcard__title}>{title}</h2>
      <p className={classes.wordcard__desc}>{description}</p>
      <NextLink href={`/words/${title}`}>
        <a>Word Page</a>
      </NextLink>
    </li>
  );
};

export default WordCard;
