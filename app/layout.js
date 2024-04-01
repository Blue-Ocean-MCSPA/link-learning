import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}

{/* <div className="navbar">
  <Link href="/">Home</Link>
  <Link href="/api/students">Student</Link>
  <Link href="/submit">Submit</Link>
</div> */}