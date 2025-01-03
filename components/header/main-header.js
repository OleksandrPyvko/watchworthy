import MainHeaderBg from "./main-header-bg";
import classes from "./main-header.module.css";
import Logo from "./logo";
import Navigation from "../navigation/navbar";
import Hamburger from "../hamburger/hamburger";
import { auth } from "@/app/auth";

async function Header() {
  const session = await auth();

  return (
    <div className={classes.header}>
      <MainHeaderBg />
      <Logo />
      <Hamburger session={session} />
      <Navigation />
    </div>
  );
}

export default Header;
