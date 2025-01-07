"use client";

import Link from "next/link";
import classes from "./hamburgerMenu.module.css";
import Hamburger from "./hamburger";
import { redirect } from "next/navigation";

function HamburgerMenu({ isOpen, setIsOpen }) {
  function toggleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  function linkClick(path) {
    setIsOpen(false);
    redirect(path);
  }

  return (
    <div
      className={`${classes["hamburger-menu"]} ${isOpen ? classes.open : ""}`}
    >
      <div>
        <button className={classes["close-menu"]} onClick={toggleMenu}>
          {" "}
          ⬅ Back
        </button>
      </div>
      <button
        className={classes["nav-button"]}
        onClick={() => linkClick("/search")}
      >
        Search
      </button>
      <button
        className={classes["nav-button"]}
        onClick={() => linkClick("/watch-later")}
      >
        Watch Later
      </button>
      <button
        className={classes["nav-button"]}
        onClick={() => linkClick("/watched")}
      >
        Watched
      </button>
    </div>
  );
}

export default HamburgerMenu;
