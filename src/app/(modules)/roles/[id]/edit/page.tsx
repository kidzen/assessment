import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { editRole } from "@/actions/role";
import { Input } from "@/components/ui/Input";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";

export default async function RoleEditPage({
  params,
}: {
  params: { id: string };
}) {
  const role = await prisma.role.findUnique({
    where: { id: params.id },
    include: {
      RoleHasPermission: true,
      UserHasRole: true,
    },
  });

  const RoleHasPermissions = await prisma.roleHasPermission.findMany();

  const UserHasRoles = await prisma.userHasRole.findMany();

  if (!role) {
    return (
      <>
        <header>
          <Heading>Role not found</Heading>
        </header>
        <footer>
          <Link href="/roles">Return to Roles list</Link>
        </footer>
      </>
    );
  }

  return (
    <>
      <header className="mb-4">
        <Heading>Edit Role</Heading>
      </header>
      <form action={editRole} className="px-2 max-w-xl">
        <div>
          <Input
            type="text"
            label="Name"
            name="name"
            className="mb-2"
            defaultValue={role.name}
            required
          />
        </div>
        <div>
          <Select
            name="RoleHasPermission"
            className="mt-1 mb-2"
            label="Role Has Permission"
            placeholder="Select Role Has Permission"
            defaultValue={role.RoleHasPermission.map((RoleHasPermission) => ({
              label: RoleHasPermission.id,
              value: RoleHasPermission.id,
            }))}
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
            defaultValue={role.UserHasRole.map((UserHasRole) => ({
              label: UserHasRole.id,
              value: UserHasRole.id,
            }))}
            isMulti
            options={UserHasRoles.map((UserHasRole) => ({
              label: UserHasRole.id,
              value: UserHasRole.id,
            }))}
          />
        </div>

        <input type="hidden" name="id" value={role.id} />

        <footer className="flex items-center justify-between mt-2">
          <Link href="/roles" className="underline text-gray-500">
            Return to Roles list
          </Link>

          <Button type="submit">Update</Button>
        </footer>
      </form>
    </>
  );
}
