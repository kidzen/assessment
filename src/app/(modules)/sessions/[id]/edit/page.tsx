import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { editSession } from "@/actions/session";
import { Input } from "@/components/ui/Input";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";

export default async function SessionEditPage({
  params,
}: {
  params: { id: string };
}) {
  const session = await prisma.session.findUnique({
    where: { id: params.id },
    include: {
      user: true,
    },
  });

  const users = await prisma.user.findMany();

  if (!session) {
    return (
      <>
        <header>
          <Heading>Session not found</Heading>
        </header>
        <footer>
          <Link href="/sessions">Return to Sessions list</Link>
        </footer>
      </>
    );
  }

  return (
    <>
      <header className="mb-4">
        <Heading>Edit Session</Heading>
      </header>
      <form action={editSession} className="px-2 max-w-xl">
        <div>
          <Input
            type="text"
            label="Session Token"
            name="sessionToken"
            className="mb-2"
            defaultValue={session.sessionToken}
            required
          />
        </div>
        <div>
          <Input
            type="datetime-local"
            label="Expires"
            name="expires"
            className="mb-2"
            defaultValue={new Date(session.expires).toISOString().slice(0, 16)}
            required
          />
        </div>
        <div>
          <Select
            name="user"
            className="mt-1 mb-2"
            label="User"
            placeholder="Select User"
            defaultValue={{ label: session.user?.id, value: session.user?.id }}
            required
            options={users.map((user) => ({
              label: user.id,
              value: user.id,
            }))}
          />
        </div>

        <input type="hidden" name="id" value={session.id} />

        <footer className="flex items-center justify-between mt-2">
          <Link href="/sessions" className="underline text-gray-500">
            Return to Sessions list
          </Link>

          <Button type="submit">Update</Button>
        </footer>
      </form>
    </>
  );
}
