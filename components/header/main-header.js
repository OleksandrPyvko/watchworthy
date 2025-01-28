import MainHeaderBg from "./main-header-bg";
import classes from "./main-header.module.css";
import Logo from "./logo";
import Navigation from "../navigation/navbar";
import Hamburger from "../hamburger/hamburger";

function Header({ session }) {
  return (
    <div className={classes.header}>
      <MainHeaderBg />
      <div className={classes.sticky}>
        <Logo />
        <Hamburger session={session} />
        <Navigation session={session} />
      </div>
    </div>
  );
}

export default Header;
