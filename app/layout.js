import Header from "@/components/header/main-header";
import "./globals.css";

export const metadata = {
  title: "Watchworthy",
  description:
    "Watch movies, add them for later to watch and rate yourfavorite movies in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
