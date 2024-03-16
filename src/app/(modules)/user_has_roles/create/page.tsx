import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { createUserHasRole } from "@/actions/user_has_role";
import { Input } from "@/components/ui/Input";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";

export default async function UserHasRoleCreatePage() {
  const roles = await prisma.role.findMany();

  const users = await prisma.user.findMany();

  return (
    <>
      <header className="mb-4">
        <Heading>Create UserHasRole</Heading>
      </header>
      <form action={createUserHasRole} className="px-2 max-w-xl">
        <div>
          <Select
            name="role"
            className="mt-1 mb-2"
            label="Role"
            placeholder="Select Role"
            required
            options={roles.map((role) => ({
              label: role.id,
              value: role.id,
            }))}
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
          <Link href="/user_has_roles" className="underline text-gray-500">
            Return to User Has Roles list
          </Link>

          <Button type="submit">Create</Button>
        </footer>
      </form>
    </>
  );
}
