import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { createAccount } from "@/actions/account";
import { Input } from "@/components/ui/Input";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";

export default async function AccountCreatePage() {
  const users = await prisma.user.findMany();

  return (
    <>
      <header className="mb-4">
        <Heading>Create Account</Heading>
      </header>
      <form action={createAccount} className="px-2 max-w-xl">
        <div>
          <Input
            type="text"
            label="Type"
            name="type"
            className="mb-2"
            required
          />
        </div>
        <div>
          <Input
            type="text"
            label="Provider"
            name="provider"
            className="mb-2"
            required
          />
        </div>
        <div>
          <Input
            type="text"
            label="Provider Account Id"
            name="providerAccountId"
            className="mb-2"
            required
          />
        </div>
        <div>
          <Input
            type="text"
            label="Refresh_token"
            name="refresh_token"
            className="mb-2"
          />
        </div>
        <div>
          <Input
            type="text"
            label="Access_token"
            name="access_token"
            className="mb-2"
          />
        </div>
        <div>
          <Input
            type="number"
            label="Expires_at"
            name="expires_at"
            className="mb-2"
          />
        </div>
        <div>
          <Input
            type="text"
            label="Token_type"
            name="token_type"
            className="mb-2"
          />
        </div>
        <div>
          <Input type="text" label="Scope" name="scope" className="mb-2" />
        </div>
        <div>
          <Input
            type="text"
            label="Id_token"
            name="id_token"
            className="mb-2"
          />
        </div>
        <div>
          <Input
            type="text"
            label="Session_state"
            name="session_state"
            className="mb-2"
          />
        </div>
        <div>
          <Select
            name="user"
            className="mt-1 mb-2"
            label="User"
            placeholder="Select User"
            required
            options={users.map((user) => ({
              label: user.id,
              value: user.id,
            }))}
          />
        </div>

        <footer className="flex items-center justify-between mt-2">
          <Link href="/accounts" className="underline text-gray-500">
            Return to Accounts list
          </Link>

          <Button type="submit">Create</Button>
        </footer>
      </form>
    </>
  );
}
