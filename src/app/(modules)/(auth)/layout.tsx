import { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sign In",
  description: "Start your venture with us",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <main className="m-2">{children}</main>
        <Link
          className="px-5 py-1 border focus:ring-2 ring-inset hover:ring-2 rounded-lg"
          href="/"
        >
          Back
        </Link>
      </body>
    </html>
  );
}
