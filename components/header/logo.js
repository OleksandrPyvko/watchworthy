import Image from "next/image";
import classes from "./main-header.module.css";
import logo from "@/public/logo22.png";
import Link from "next/link";

function Logo() {
  return (
    <div>
      <Link href="/" className={classes.logo}>
        <div className={classes.imageContainer}>
          <Image src={logo} fill alt="logo" />
        </div>
        <span>Watchworthy</span>
      </Link>
    </div>
  );
}
export default Logo;
