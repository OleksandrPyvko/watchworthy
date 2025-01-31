"use client";

const { Bars } = require("react-loader-spinner");
import classes from "./loader.module.css";

export function Loader() {
  return (
    <div className={classes.relative}>
      <div className={classes.wrapper}>
        <Bars
          height="80"
          width="80"
          color="#66ccff"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    </div>
  );
}
