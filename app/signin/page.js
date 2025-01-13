import SignInCredentials from "@/components/signin/signInCredentials";
import SignInGoogle from "@/components/signin/singInGoogle";
import classes from "./page.module.css";
import { auth } from "../auth";

async function page() {
  const session = await auth();
  console.log(session?.user, "session");

  return (
    <div className={classes.container}>
      <SignInCredentials />
      <div className={classes.divider}>
        <hr className={classes.line} />
        <span className={classes.text}>or</span>
        <hr className={classes.line} />
      </div>
      <SignInGoogle />
    </div>
  );
}

export default page;
