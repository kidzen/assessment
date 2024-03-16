import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { editVerificationToken } from "@/actions/verification_token";
import { Input } from "@/components/ui/Input";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export default async function VerificationTokenEditPage({
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
      <header className="mb-4">
        <Heading>Edit VerificationToken</Heading>
      </header>
      <form action={editVerificationToken} className="px-2 max-w-xl">
        <div>
          <Input
            type="text"
            label="Identifier"
            name="identifier"
            className="mb-2"
            defaultValue={verificationToken.tokenentifier}
            required
          />
        </div>
        <div>
          <Input
            type="text"
            label="Token"
            name="token"
            className="mb-2"
            defaultValue={verificationToken.token}
            required
          />
        </div>
        <div>
          <Input
            type="datetime-local"
            label="Expires"
            name="expires"
            className="mb-2"
            defaultValue={new Date(verificationToken.expires)
              .toISOString()
              .slice(0, 16)}
            required
          />
        </div>

        <input type="hidden" name="id" value={verificationToken.token} />

        <footer className="flex items-center justify-between mt-2">
          <Link href="/verification_tokens" className="underline text-gray-500">
            Return to Verification Tokens list
          </Link>

          <Button type="submit">Update</Button>
        </footer>
      </form>
    </>
  );
}
