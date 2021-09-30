import classes from "./styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <p>
        Made with love by{" "}
        <a
          className={classes.externallink}
          href="https://github.com/Mert18"
          target="_blank"
          rel="noreferrer"
        >
          Mert Uyğur
        </a>
      </p>
    </footer>
  );
}
