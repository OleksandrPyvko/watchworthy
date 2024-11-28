import Header from "@/components/header/main-header";
import "./globals.css";
import ReactQueryProvider from "@/lib/reactQueryProvider";
import { Suspense } from "react";

export const metadata = {
  title: "Watchworthy",
  description:
    "Watch movies, add them for later to watch and rate yourfavorite movies in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<p>Loading</p>}>
          <ReactQueryProvider>
            <Header />
            <main>{children}</main>
          </ReactQueryProvider>
        </Suspense>
      </body>
    </html>
  );
}
