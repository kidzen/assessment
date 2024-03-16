import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { createRole } from "@/actions/role";
import { Input } from "@/components/ui/Input";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";

export default async function RoleCreatePage() {
  const permissions = await prisma.permission.findMany();

  const users = await prisma.user.findMany();

  return (
    <>
      <header className="mb-4">
        <Heading>Create Role</Heading>
      </header>
      <form action={createRole} className="px-2 max-w-xl">
        <div>
          <Input
            type="text"
            label="Name"
            name="name"
            className="mb-2"
            required
          />
        </div>
        <div>
          <Select
            name="permissions"
            className="mt-1 mb-2"
            label="Permission"
            placeholder="Select Permission"
            isMulti
            options={permissions.map((permission) => ({
              label: `${permission.action} on ${permission.subject}`,
              value: permission.id,
            }))}
          />
        </div>
        <div>
          <Select
            name="users"
            className="mt-1 mb-2"
            label="User"
            placeholder="Select User"
            isMulti
            options={users.map((user) => ({
              label: user.name,
              value: user.id,
            }))}
          />
        </div>

        <footer className="flex items-center justify-between mt-2">
          <Link href="/roles" className="underline text-gray-500">
            Return to Roles list
          </Link>

          <Button type="submit">Create</Button>
        </footer>
      </form>
    </>
  );
}
