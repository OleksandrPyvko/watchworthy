import classes from "./navbar.module.css";
import AuthButton from "../buttons/authButton";
import NavLink from "./NavLink";
import Image from "next/image";
import noProfilePic from "@/public/no-profile-pic.png";

function Navigation({ session }) {
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
        {session?.user.name && (
          <>
            <Image
              style={{
                border: "1px solid transparent",
                borderRadius: "50%",
              }}
              src={session.user.image || noProfilePic}
              alt="user image"
              referrerPolicy="no-referrer"
              width={40}
              height={40}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className={classes["user-image"]}
            />

            <span className={classes.user}>{session.user?.name}</span>
          </>
        )}
        <AuthButton />
      </div>
    </>
  );
}

export default Navigation;
