import { auth } from "@/app/auth";
import Rating from "@/components/rating/rating-bar";
import { Suspense } from "react";

async function page() {
  const session = await auth();
  console.log(session);

  return (
    <>
      {session.user ? (
        <h1>Movies you've watched</h1>
      ) : (
        <p>Please log in to manage your lists</p>
      )}
      <Suspense fallback={<p>ayo</p>}>
        <Rating />
      </Suspense>
    </>
  );
}

export default page;
