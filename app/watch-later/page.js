import { auth } from "@/app/auth";

async function page() {
  const session = await auth();

  return (
    <>
      <h1>Movies you are planning to watch</h1>
    </>
  );
}

export default page;
