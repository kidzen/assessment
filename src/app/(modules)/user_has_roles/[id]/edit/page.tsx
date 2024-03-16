import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { editUserHasRole } from "@/actions/user_has_role";
import { Input } from "@/components/ui/Input";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";

export default async function UserHasRoleEditPage({
  params,
}: {
  params: { id: string };
}) {
  const userHasRole = await prisma.userHasRole.findUnique({
    where: { id: params.id },
    include: {
      role: true,
      user: true,
    },
  });

  const roles = await prisma.role.findMany();

  const users = await prisma.user.findMany();

  if (!userHasRole) {
    return (
      <>
        <header>
          <Heading>User Has Role not found</Heading>
        </header>
        <footer>
          <Link href="/user_has_roles">Return to User Has Roles list</Link>
        </footer>
      </>
    );
  }

  return (
    <>
      <header className="mb-4">
        <Heading>Edit UserHasRole</Heading>
      </header>
      <form action={editUserHasRole} className="px-2 max-w-xl">
        <div>
          <Select
            name="role"
            className="mt-1 mb-2"
            label="Role"
            placeholder="Select Role"
            defaultValue={{
              label: userHasRole.role?.id,
              value: userHasRole.role?.id,
            }}
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
            defaultValue={{
              label: userHasRole.user?.id,
              value: userHasRole.user?.id,
            }}
            required
            options={users.map((user) => ({
              label: user.id,
              value: user.id,
            }))}
          />
        </div>

        <input type="hidden" name="id" value={userHasRole.id} />

        <footer className="flex items-center justify-between mt-2">
          <Link href="/user_has_roles" className="underline text-gray-500">
            Return to User Has Roles list
          </Link>

          <Button type="submit">Update</Button>
        </footer>
      </form>
    </>
  );
}
