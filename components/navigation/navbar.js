import Link from "next/link";
import classes from "./navbar.module.css";
import { auth } from "@/app/auth";
import AuthButton from "../buttons/authButton";
import NavLink from "./NavLink";
import Image from "next/image";

async function Navigation() {
  const session = await auth();

  return (
    <>
      <ul className={classes.nav}>
        <li className={classes["nav-link"]}>
          <NavLink href="/search">Search</NavLink>
        </li>
        <li>
          <NavLink href="/watch-later">Watch later</NavLink>
        </li>
        <li>
          <NavLink href="/watched">Watched</NavLink>
        </li>
        <li></li>
      </ul>
      <div className={classes["user-container"]}>
        {session?.user && (
          <>
            <Image
              style={{
                border: "1px solid transparent",
                borderRadius: "50%",
              }}
              src={session.user.image}
              alt="user image"
              referrerPolicy="no-referrer"
              width={40}
              height={40}
            />
            <span className={classes.user}>
              {session?.user ? `${session?.user?.name}` : ""}
            </span>
          </>
        )}
        <AuthButton />
      </div>
    </>
  );
}

export default Navigation;
