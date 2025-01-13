"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import classes from "./signInCredentials.module.css";

export default function SignInCredentials() {
  const [email, setEmail] = useState("test@mail.com");
  const [password, setPassword] = useState("Password123");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password, "submitting");
    const result = await signIn("credentials", {
      email,
      password,
    });

    if (result.error) {
      // Handle error
      console.error(result.error);
      console.log("error");
    } else {
      // Redirect or handle successful sign-in
      console.log("Signed in successfully");
    }
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit} className={classes.form}>
        <label htmlFor="email" className={classes.label}>
          Email:
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={classes.input}
          placeholder="test@mail.com"
        />
        <label htmlFor="password" className={classes.label}>
          Password:
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className={classes.input}
          placeholder="Password123"
        />
        <button className={classes.button} type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}
