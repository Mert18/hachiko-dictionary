import NextLink from "next/link";
import { IGame } from "../../../types";
import classes from "./Games.module.css";

const GameCard = ({ title, description, route }: IGame) => {
  return (
    <li key={title} className={classes.gamecard}>
      <NextLink href={`/games/${route}`}>
        <a>
          <h2>{title}</h2>
          <p>{description}</p>
        </a>
      </NextLink>
    </li>
  );
};

export default GameCard;
