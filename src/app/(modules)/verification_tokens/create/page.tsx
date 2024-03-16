import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { createVerificationToken } from "@/actions/verification_token";
import { Input } from "@/components/ui/Input";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export default async function VerificationTokenCreatePage() {
  return (
    <>
      <header className="mb-4">
        <Heading>Create VerificationToken</Heading>
      </header>
      <form action={createVerificationToken} className="px-2 max-w-xl">
        <div>
          <Input
            type="text"
            label="Identifier"
            name="identifier"
            className="mb-2"
            required
          />
        </div>
        <div>
          <Input
            type="text"
            label="Token"
            name="token"
            className="mb-2"
            required
          />
        </div>
        <div>
          <Input
            type="datetime-local"
            label="Expires"
            name="expires"
            className="mb-2"
            required
          />
        </div>

        <footer className="flex items-center justify-between mt-2">
          <Link href="/verification_tokens" className="underline text-gray-500">
            Return to Verification Tokens list
          </Link>

          <Button type="submit">Create</Button>
        </footer>
      </form>
    </>
  );
}
