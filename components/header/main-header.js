import MainHeaderBg from "./main-header-bg";
import classes from "./main-header.module.css";
import Logo from "./logo";
import Navigation from "../navigation/navbar";
import Humburger from "../humburger/humburger";

function Header() {
  return (
    <div className={classes.header}>
      <MainHeaderBg />
      <Logo />
      <Navigation />
      <Humburger />
    </div>
  );
}

export default Header;
