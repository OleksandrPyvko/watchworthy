import Link from "next/link";
import classes from "./navbar.module.css";

function Navigation() {
  return (
    <ul className={classes.nav}>
      <li className={classes["nav-link"]}>
        <Link className={classes["nav-link"]} href="/search">
          Search
        </Link>
      </li>
      <li>
        <Link href="/watch-later">Watch later</Link>
      </li>
      <li>
        <Link href="/watched">Watched</Link>
      </li>
    </ul>
  );
}

export default Navigation;
