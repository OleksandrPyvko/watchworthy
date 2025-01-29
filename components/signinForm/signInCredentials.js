"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import classes from "./signInCredentials.module.css";

export default function SignInCredentials({ error }) {
  const [email, setEmail] = useState("test@mail.com");
  const [password, setPassword] = useState("Password123");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
    });

    if (result.error) {
      console.error(result.error);
    } else {
      console.log("Signed in successfully");
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      {error && (
        <p style={{ color: "red" }}>
          {error === "CredentialsSignin"
            ? "Invalid email or password. Please try again."
            : "An unexpected error occurred. Please try again later."}
        </p>
      )}
      <form className={classes.form} onSubmit={handleSubmit}>
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
        <button className={classes.button} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}
