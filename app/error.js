"use client";

import Link from "next/link";
import classes from "./error.module.css";

function error() {
  return (
    <div className={classes.container}>
      <p className={classes["error-text"]}>
        Oops, an <span className={classes.highlight}>error</span> occured.
        Please try again later
      </p>
      <Link href="/search" className={classes.home}>
        Home
      </Link>
    </div>
  );
}

export default error;
