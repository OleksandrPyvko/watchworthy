import { auth } from "../auth";

async function page() {
  const session = await auth();

  return (
    <>
      <h1>Watched movies</h1>
    </>
  );
}

export default page;
