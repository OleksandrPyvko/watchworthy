import SignInCredentials from "@/components/signinForm/signInCredentials";
import SignInGoogle from "@/components/signinForm/singInGoogle";
import classes from "./page.module.css";
import { auth } from "../auth";
import { redirect } from "next/navigation";

async function Page({ searchParams }) {
  const searchParam = await searchParams;
  const error = searchParam.error === 'CredentialsSignin' ? searchParam.error : null;
  const session = await auth();
  if (session) redirect("/");


  return (
    <div className={classes.container}>
      {session?.user ? (
        <span>Ne alo</span>
      ) : (
        <>
          <SignInCredentials  error={error}/>
          <div className={classes.divider}>
            <hr className={classes.line} />
            <span className={classes.text}>or</span>
            <hr className={classes.line} />
          </div>
          <SignInGoogle />
          <div className={classes.divider}>
            <hr className={classes.line} />
          </div>
          <p className={classes.text}>
            Don&apos;t have an account?{" "}
            <a
              href="/signup"
              style={{ color: "#0090f3", textDecoration: "underline" }}
            >
              Sign up here
            </a>
          </p>
          <p className={classes.tiny}>(no verification needed)</p>
        </>
      )}
    </div>
  );
}

export default Page;
