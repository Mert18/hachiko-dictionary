import classes from "./Footer.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <div>
        <a
          target="_blank"
          href="https://github.com/Mert18/hachiko-dictionary"
          rel="noreferrer"
        >
          <div className={classes.githubwrapper}>
            <Image src="/images/ghub.svg" layout="fill" objectFit="contain" />
          </div>
        </a>
      </div>
    </footer>
  );
}
