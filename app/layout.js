import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { AppWrapper } from "./context";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <AppWrapper> */}
          {/* <div>This is RootLayout Page</div> */}
          {children}
        {/* </AppWrapper> */}
      </body>
    </html>
  );
}

{/* <div className="navbar">
  <Link href="/">Home</Link>
  <Link href="/api/students">Student</Link>
  <Link href="/submit">Submit</Link>
</div> */}