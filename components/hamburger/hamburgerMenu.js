"use client";

import Link from "next/link";
import classes from "./hamburgerMenu.module.css";
import Hamburger from "./hamburger";

function HamburgerMenu({ isOpen, setIsOpen }) {
  function toggleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div>
      <div className={`${classes["hamburger-menu"]} ${isOpen ? classes.open : ""}`}>
        <Link href="/search">Search</Link>
        <Link href="/watch-later">Watch Later</Link>
        <Link href="/watched">Watched</Link>
      <button onClick={toggleMenu}>X</button>
      </div>
    </div>
  );
}

export default HamburgerMenu;
