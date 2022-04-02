import classes from "./Info.module.css";

const Info = ({ word }: any) => {
  return (
    <section className={classes.info}>
      <article className={classes.hachikodictionary}>
        <p>
          <span className={classes.brandname}>Hachiko Dictionary</span> is more
          a learning project than an actual dictionary. Most of the words are
          taken from reliable sources such as{" "}
          <a
            className={classes.externallink}
            href="https://www.merriam-webster.com"
            target="_blank"
            rel="noreferrer"
          >
            Merriam Webster
          </a>{" "}
          and{" "}
          <a
            className={classes.externallink}
            href="https://dictionary.cambridge.org"
            target="_blank"
            rel="noreferrer"
          >
            Cambridge Dictionary
          </a>
        </p>
      </article>
    </section>
  );
};

export default Info;
