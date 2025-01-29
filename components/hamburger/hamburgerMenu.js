"use client";

import Image from "next/image";
import classes from "./hamburgerMenu.module.css";
import { redirect } from "next/navigation";
import noProfilePic from "@/public/no-profile-pic.png";
import { signOutAction } from "@/lib/actions";
import Link from "next/link";

function HamburgerMenu({ isOpen, setIsOpen, session }) {
  function toggleMenu() {
    setIsOpen((prevState) => !prevState);
  }

  function linkClick(path) {
    setIsOpen(false);
    redirect(path);
  }

  return (
    <div
      className={`${classes["hamburger-menu"]} ${
        isOpen ? classes.open : classes.closed
      }`}
    >
      <div></div>
      <div className={classes.links}>
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
      {session?.user ? (
        <div className={classes.user}>
          <Image
            src={noProfilePic}
            width={70}
            height={70}
            alt="User picture"
            className={classes["user-image"]}
          />
          <span>{session?.user?.name}</span>
          <form action={signOutAction}>
            <button className={classes.signout} onClick={toggleMenu}>
              Sign Out
            </button>
          </form>
        </div>
      ) : (
        <div>
          <Link
            href="/signin"
            className={` ${isOpen ? classes.signin : ''}`}
            onClick={toggleMenu}
          >
            Sign in
          </Link>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
