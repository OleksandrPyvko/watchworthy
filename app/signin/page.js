import classes from "./page.module.css";
import { signInAction } from "@/lib/actions";
function page() {
  return (
    <div className={classes["signin-container"]}>
      <h2>Please sign in to use this feature</h2>
      <form action={signInAction}>
        <button className={classes.signin}>
          <img
            src="https://authjs.dev/img/providers/google.svg"
            height="24"
            width="24"
          />
          Sign in with Google
        </button>
      </form>
    </div>
  );
}

export default page;
