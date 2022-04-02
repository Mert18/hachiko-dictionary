import classes from "./Games.module.css";
import GameCard from "./GameCard";
import { IGame } from "../../../types";

const games = [
  {
    id: 1,
    title: "Guess The Word",
    description: "Find the word from given description.",
    route: "guesstheword",
  }
];

const Games = () => {
  return (
    <section className={classes.games}>
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
    </section>
  );
};

export default Games;
