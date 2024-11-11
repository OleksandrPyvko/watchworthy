import { signOutAction } from "@/lib/actions";

async function page() {
  return (
    <form
      action={async () => {
        "use server";
        await signOutAction();
      }}
    >
      <button>Sign Out</button>
    </form>
  );
}

export default page;
