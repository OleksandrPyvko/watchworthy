import Link from "next/link";
import classes from "./navbar.module.css";
import { auth } from "@/app/auth";
import AuthButton from "../buttons/authButton";
import { Suspense } from "react";

async function Navigation() {
  const session = await auth();

  return (
    <ul className={classes.nav}>
      <li className={classes["nav-link"]}>
        <Link className={classes["nav-link"]} href="/search">
          Search
        </Link>
      </li>
      <li>
        <Link href="/watch-later">Watch later</Link>
      </li>
      <li>
        <Link href="/watched">Watched</Link>
      </li>
      <li>
        <div className={classes["user-container"]}>
          {session?.user && (
            <>
              <img
                style={{
                  height: "2rem",
                  border: "1px solid transparent",
                  borderRadius: "50%",
                }}
                src={session.user.image}
                alt="user image"
                referrerPolicy="no-referrer"
              />
              <span className={classes.user}>
                {session?.user ? `${session?.user?.name}` : ""}
              </span>
            </>
          )}
        </div>
      </li>
      
        <AuthButton />
      
    </ul>
  );
}

export default Navigation;
