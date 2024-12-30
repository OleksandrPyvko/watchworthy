"use client";

import { useState } from "react";
import classes from "./humburger.module.css";
import Image from "next/image";
import NavLink from "../navigation/NavLink";
import AuthButton from "../buttons/authButton";
import { auth } from "@/app/auth";

function Humburger({ session }) {
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
