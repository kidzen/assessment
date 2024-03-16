import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { editPasswordResetToken } from "@/actions/password_reset_token";
import { Input } from "@/components/ui/Input";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export default async function PasswordResetTokenEditPage({
  params,
}: {
  params: { id: string };
}) {
  const passwordResetToken = await prisma.passwordResetToken.findUnique({
    where: { id: params.id },
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
      <header className="mb-4">
        <Heading>Edit PasswordResetToken</Heading>
      </header>
      <form action={editPasswordResetToken} className="px-2 max-w-xl">
        <div>
          <Input
            type="text"
            label="Email"
            name="email"
            className="mb-2"
            defaultValue={passwordResetToken.email}
            required
          />
        </div>
        <div>
          <Input
            type="text"
            label="Token"
            name="token"
            className="mb-2"
            defaultValue={passwordResetToken.token}
            required
          />
        </div>
        <div>
          <Input
            type="datetime-local"
            label="Expires"
            name="expires"
            className="mb-2"
            defaultValue={new Date(passwordResetToken.expires)
              .toISOString()
              .slice(0, 16)}
            required
          />
        </div>

        <input type="hidden" name="id" value={passwordResetToken.id} />

        <footer className="flex items-center justify-between mt-2">
          <Link
            href="/password_reset_tokens"
            className="underline text-gray-500"
          >
            Return to Password Reset Tokens list
          </Link>

          <Button type="submit">Update</Button>
        </footer>
      </form>
    </>
  );
}
