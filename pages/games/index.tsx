import Container from "../../components/Container";
import classes from "../../styles/games.module.css";
import GameList from "../../components/GameList";

const Games = () => {
  return (
    <Container>
      <div className={classes.games}>
        <section className={classes.games__games}>
          <div className={classes.sectionhead}>
            <h2>Games</h2>
          </div>
          <div className={classes.gamelistwrapper}>
            <GameList />
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Games;
