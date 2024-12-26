"use client";

import { useState } from "react";
import classes from "./humburger.module.css";

function Humburger() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div className={classes.container}>
      <button
        className={`${classes.hamburger} ${isOpen ? classes.open : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className={classes.line}></span>
        <span className={classes.line}></span>
        <span className={classes.line}></span>
      </button>
    </div>
  );
}

export default Humburger;
