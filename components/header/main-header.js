import MainHeaderBg from "./main-header-bg";
import classes from "./main-header.module.css";
import Logo from "./logo";
import Navigation from "../navigation/navbar";
import Hamburger from "../hamburger/hamburger";

function Header({ session }) {
  return (
    <div className={classes.header}>
      <MainHeaderBg />
      <Logo />
      <Hamburger session={session} />
      <Navigation session={session} />
    </div>
  );
}

export default Header;
