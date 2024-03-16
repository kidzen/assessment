import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { createPermission } from "@/actions/permission";
import { Input } from "@/components/ui/Input";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";

export default async function PermissionCreatePage() {
  const RoleHasPermissions = await prisma.roleHasPermission.findMany();

  return (
    <>
      <header className="mb-4">
        <Heading>Create Permission</Heading>
      </header>
      <form action={createPermission} className="px-2 max-w-xl">
        <div>
          <Input
            type="text"
            label="Action"
            name="action"
            className="mb-2"
            required
          />
        </div>
        <div>
          <Input
            type="text"
            label="Subject"
            name="subject"
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

        <footer className="flex items-center justify-between mt-2">
          <Link href="/permissions" className="underline text-gray-500">
            Return to Permissions list
          </Link>

          <Button type="submit">Create</Button>
        </footer>
      </form>
    </>
  );
}
