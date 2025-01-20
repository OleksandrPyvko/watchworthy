"use client";

import { useState } from "react";
import classes from "././signUpForm.module.css";
import { createGuest } from "@/lib/data-service";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [error, setError] = useState("");

  async function onSubmit(e) {
    setError("");

    if (password !== passwordCheck) {
      setError("Passwords do not match.");
    }

    if (!password || !email) {
      setError("Please fill in all fields");
    }

    try {
      const newGuest = { email, password };

      await createGuest(newGuest);
      setEmail("");
      setPassword("");
      setPasswordCheck("");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className={classes.container}>
      <h1>Sign Up</h1>
      {error !== "" && <p>{error}</p>}

      <form className={classes.form}>
        <label className={classes.label}>Email:</label>
        <input
          className={classes.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className={classes.label}>Password:</label>
        <input
          className={classes.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label className={classes.label}>Repeat password:</label>
        <input
          className={classes.input}
          type="password"
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
          required
        />
        <button className={classes.button} type="submit">
          Sign Up
        </button>
      </form>
      <div className={classes.divider}>
        <hr className={classes.line} />
      </div>
      <p className={classes.text}>
        Already have an account?{" "}
        <a
          href="/signin"
          style={{ color: "#0090f3", textDecoration: "underline" }}
        >
          Log in here
        </a>
      </p>
    </div>
  );
}

export default SignUpForm;
