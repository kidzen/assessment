import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Heading } from "@/components/ui/Heading";

export default async function VerificationTokenPage({
  params,
}: {
  params: { id: string };
}) {
  const verificationToken = await prisma.verificationToken.findUnique({
    where: { id: params.id },
  });

  if (!verificationToken) {
    return (
      <>
        <header>
          <Heading>Verification Token not found</Heading>
        </header>
        <footer>
          <Link href="/verification_tokens">
            Return to Verification Tokens list
          </Link>
        </footer>
      </>
    );
  }

  return (
    <>
      <header className="mt-2 mb-4">
        <Heading>
          Verification Token #{verificationToken.token.substring(0, 6)}...
        </Heading>
      </header>

      <section className="relative overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8 max-w-xl mb-4">
        <span className="absolute inset-x-0 bottom-0 h-21 bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600"></span>
        <p className="text-gray-700 mb-4 last:mb-0">
          <strong className="text-gray-900">Identifier:</strong>{" "}
          {verificationToken.tokenentifier}
        </p>
        <p className="text-gray-700 mb-4 last:mb-0">
          <strong className="text-gray-900">Token:</strong>{" "}
          {verificationToken.token}
        </p>
        <p className="text-gray-700 mb-4 last:mb-0">
          <strong className="text-gray-900">Expires:</strong>{" "}
          {new Date(verificationToken.expires).toLocaleString()}
        </p>
      </section>

      <footer>
        <Link href="/verification_tokens" className="underline text-gray-500">
          Return to Verification Tokens list
        </Link>
      </footer>
    </>
  );
}
