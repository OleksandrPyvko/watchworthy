import Image from "next/image";
import classes from "./signInGoogle.module.css";
import { signInAction } from "@/lib/actions";

function SignInGoogle() {
  return (
    <div className={classes["signin-container"]}>
      
      <form action={signInAction}>
        <button className={classes.signin}>
          <Image
            src="https://authjs.dev/img/providers/google.svg"
            height="24"
            width="24"
            alt="Google"
          />
          Sign in with Google
        </button>
      </form>
    </div>
  );
}

export default SignInGoogle;
