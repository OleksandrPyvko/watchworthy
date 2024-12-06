"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./navLink.module.css";

function NavLink({ href, children }) {
  const path = usePathname();

  console.log(path);

  return (
    <Link className={path === href ? `${classes.active}` : ""} href={href}>
      {children}
    </Link>
  );
}

export default NavLink;
