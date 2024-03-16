import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Heading } from "@/components/ui/Heading";

export default async function PasswordResetTokenPage({
  params,
}: {
  params: { token: string };
}) {
  const passwordResetToken = await prisma.passwordResetToken.findUnique({
    where: { token: params.token },
  });

  if (!passwordResetToken) {
    return (
      <>
        <header>
          <Heading>Password Reset Token not found</Heading>
        </header>
        <footer>
          <Link href="/password_reset_tokens">
            Return to Password Reset Tokens list
          </Link>
        </footer>
      </>
    );
  }

  return (
    <>
      <header className="mt-2 mb-4">
        <Heading>Password Reset Token #{passwordResetToken.email}...</Heading>
      </header>

      <section className="relative overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8 max-w-xl mb-4">
        <span className="absolute inset-x-0 bottom-0 h-21 bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600"></span>
        <p className="text-gray-700 mb-4 last:mb-0">
          <strong className="text-gray-900">Email:</strong>{" "}
          {passwordResetToken.email}
        </p>
        <p className="text-gray-700 mb-4 last:mb-0">
          <strong className="text-gray-900">Token:</strong>{" "}
          {passwordResetToken.token}
        </p>
        <p className="text-gray-700 mb-4 last:mb-0">
          <strong className="text-gray-900">Expires:</strong>{" "}
          {new Date(passwordResetToken.expires).toLocaleString()}
        </p>
      </section>

      <footer>
        <Link href="/password_reset_tokens" className="underline text-gray-500">
          Return to Password Reset Tokens list
        </Link>
      </footer>
    </>
  );
}
