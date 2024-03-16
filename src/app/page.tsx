import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link className="px-5 py-1 border focus:ring-2 ring-inset hover:ring-2 rounded-lg" href="/login">
        Sign In using Credential
      </Link>
      <Link className="px-5 py-1 border focus:ring-2 ring-inset hover:ring-2 rounded-lg" href="/login-github">
        Sign In using Github
      </Link>
      <Link className="px-5 py-1 border focus:ring-2 ring-inset hover:ring-2 rounded-lg" href="/login-google">
        Sign In using Google
      </Link>
      <Link className="px-5 py-1 border focus:ring-2 ring-inset hover:ring-2 rounded-lg" href="/register">
        Register
      </Link>
      <Link className="px-5 py-1 border focus:ring-2 ring-inset hover:ring-2 rounded-lg" href="/reset-password">
        Reset Password
      </Link>
      <Link className="px-5 py-1 border focus:ring-2 ring-inset hover:ring-2 rounded-lg" href="/forgot-password">
        Forgot Password
      </Link>
    </main>
  );
}
