import NextLink from "next/link";
import { IGame } from "../types";
import classes from "./styles/gamecard.module.css";

const GameCard = ({ title, description, route }: IGame) => {
  return (
    <li key={title} className={classes.gamecard}>
      <h2>{title}</h2>
      <p>{description}</p>
      <NextLink href={`/games/${route}`}>
        <a>Play</a>
      </NextLink>
    </li>
  );
};

export default GameCard;
