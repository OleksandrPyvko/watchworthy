import Image from "next/image";
import classes from "./main-header.module.css";
import logo from "@/public/logo22.png";
import Link from "next/link";

function Logo() {
  return (
    <div>
      <Link href="/" className={classes.logo}>
        <div className={classes.imageContainer}>
          <Image
            src={logo}
            width={80}
            height={80}
            alt="logo"
            styles={{ width: "80px", height: "80px" }}
            className={classes.image}
          />
        </div>
        <p className={classes.title}>Watchworthy</p>
      </Link>
    </div>
  );
}
export default Logo;
