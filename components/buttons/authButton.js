

import { signInAction, signOutAction } from "@/lib/actions";
import classes from "./authButton.module.css";
import { auth } from "@/app/auth";

async function AuthButton() {
  const session = await auth();
  return (
    <>
      {session ? (
        <form
          
          action={async () => {
            "use server";
            await signOutAction();
          }}
        >
          <button className={classes.signin}>Sign Out</button>
        </form>
      ) : (
        <form  action={signInAction}>
          <button className={classes.signin}>
            <img
              src="https://authjs.dev/img/providers/google.svg"
              height="20"
              width="20"
            />
            Sign in with Google
          </button>
        </form>
      )}
    </>
  );
}

export default AuthButton;



