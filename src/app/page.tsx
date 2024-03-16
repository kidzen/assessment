import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <section className="my-auto">
      <div className="mx-auto max-w-screen-xl px-4 py-16">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-indigo-700 sm:block">
            Congratulations!
          </h1>

          <p className="mt-8 sm:text-xl/relaxed">
            You have successfully generated your Next.js app with CRUD
            operations for Prisma. Now feel free to customize it to your needs.
          </p>

          <div className="mt-8 mx-auto">
            <Link
              className="px-5 py-1 border focus:ring-2 ring-inset hover:ring-2 rounded-lg"
              href="/login"
            >
              Sign In using Credential
            </Link>
            <Link
              className="px-5 py-1 border focus:ring-2 ring-inset hover:ring-2 rounded-lg"
              href="/login-github"
            >
              Sign In using Github
            </Link>
            <Link
              className="px-5 py-1 border focus:ring-2 ring-inset hover:ring-2 rounded-lg"
              href="/login-google"
            >
              Sign In using Google
            </Link>
            <Link
              className="px-5 py-1 border focus:ring-2 ring-inset hover:ring-2 rounded-lg"
              href="/register"
            >
              Register
            </Link>
            <Link
              className="px-5 py-1 border focus:ring-2 ring-inset hover:ring-2 rounded-lg"
              href="/reset-password"
            >
              Reset Password
            </Link>
            <Link
              className="px-5 py-1 border focus:ring-2 ring-inset hover:ring-2 rounded-lg"
              href="/forgot-password"
            >
              Forgot Password
            </Link>
            <Button
              as="a"
              href="https://github.com/MBrunoS/prisma-next-crud-generator"
              className="font-medium shadow sm:w-auto"
              target="_blank"
            >
              Star us on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
