import classes from "../styles/header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/words">
              <a>Words</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
