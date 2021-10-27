import { IGame } from "../types";
import classes from "./styles/gamecard.module.css";
import GameCard from "./GameCard";

const games = [
  {
    id: 1,
    title: "Guess The Word",
    description: "Find the word from given description.",
    route: "guesstheword",
  },
];

const GameList = () => {
  return (
    <ul className={classes.gamelist}>
      {games.map((game: IGame) => (
        <GameCard
          id={game.id}
          key={game.id}
          title={game.title}
          description={game.description}
          route={game.route}
        />
      ))}
    </ul>
  );
};

export default GameList;
