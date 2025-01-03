"use client";

import { useState } from "react";
import classes from "./hamburger.module.css";
import Image from "next/image";
import NavLink from "../navigation/NavLink";
import AuthButton from "../buttons/authButton";
import { auth } from "@/app/auth";
import HamburgerMenu from "./hamburgerMenu";

function Hamburger({ session }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
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
    <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
  );
}

export default Hamburger;
