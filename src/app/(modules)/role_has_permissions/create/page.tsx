import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { createRoleHasPermission } from "@/actions/role_has_permission";
import { Input } from "@/components/ui/Input";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";

export default async function RoleHasPermissionCreatePage() {
  const roles = await prisma.role.findMany();

  const permissions = await prisma.permission.findMany();

  return (
    <>
      <header className="mb-4">
        <Heading>Create RoleHasPermission</Heading>
      </header>
      <form action={createRoleHasPermission} className="px-2 max-w-xl">
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
            name="permission"
            className="mt-1 mb-2"
            label="Permission"
            placeholder="Select Permission"
            required
            options={permissions.map((permission) => ({
              label: permission.id,
              value: permission.id,
            }))}
          />
        </div>

        <footer className="flex items-center justify-between mt-2">
          <Link
            href="/role_has_permissions"
            className="underline text-gray-500"
          >
            Return to Role Has Permissions list
          </Link>

          <Button type="submit">Create</Button>
        </footer>
      </form>
    </>
  );
}
