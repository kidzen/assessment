import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { createRole } from "@/actions/role";
import { Input } from "@/components/ui/Input";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";

export default async function RoleCreatePage() {
  const RoleHasPermissions = await prisma.roleHasPermission.findMany();

  const UserHasRoles = await prisma.userHasRole.findMany();

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
            name="RoleHasPermission"
            className="mt-1 mb-2"
            label="Role Has Permission"
            placeholder="Select Role Has Permission"
            isMulti
            options={RoleHasPermissions.map((RoleHasPermission) => ({
              label: RoleHasPermission.id,
              value: RoleHasPermission.id,
            }))}
          />
        </div>
        <div>
          <Select
            name="UserHasRole"
            className="mt-1 mb-2"
            label="User Has Role"
            placeholder="Select User Has Role"
            isMulti
            options={UserHasRoles.map((UserHasRole) => ({
              label: UserHasRole.id,
              value: UserHasRole.id,
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
