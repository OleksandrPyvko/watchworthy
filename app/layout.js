import Header from "@/components/header/main-header";
import { auth } from "@/app/auth";
import "./globals.css";

export const metadata = {
  title: "Watchworthy",
  description:
    "Watch movies, add them for later to watch and rate your favorite movies in one place",
};

export default async function RootLayout({ children }) {
  const session = await auth();

  return (
    //* adding suppressHydrationWarning to the html tag to avoid the warning caused by some browser extantions
    <html lang="en" suppressHydrationWarning>
      <body>
        <Header session={session} />
        <main>{children}</main>
      </body>
    </html>
  );
}
