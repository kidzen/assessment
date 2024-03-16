import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { editPermission } from "@/actions/permission";
import { Input } from "@/components/ui/Input";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";

export default async function PermissionEditPage({
  params,
}: {
  params: { id: string };
}) {
  const permission = await prisma.permission.findUnique({
    where: { id: params.id },
    include: {
      roles: true,
    },
  });

  const RoleHasPermissions = await prisma.roleHasPermission.findMany();

  if (!permission) {
    return (
      <>
        <header>
          <Heading>Permission not found</Heading>
        </header>
        <footer>
          <Link href="/permissions">Return to Permissions list</Link>
        </footer>
      </>
    );
  }

  return (
    <>
      <header className="mb-4">
        <Heading>Edit Permission</Heading>
      </header>
      <form action={editPermission} className="px-2 max-w-xl">
        <div>
          <Input
            type="text"
            label="Action"
            name="action"
            className="mb-2"
            defaultValue={permission.action}
            required
          />
        </div>
        <div>
          <Input
            type="text"
            label="Subject"
            name="subject"
            className="mb-2"
            defaultValue={permission.subject}
            required
          />
        </div>

        <input type="hidden" name="id" value={permission.id} />

        <footer className="flex items-center justify-between mt-2">
          <Link href="/permissions" className="underline text-gray-500">
            Return to Permissions list
          </Link>

          <Button type="submit">Update</Button>
        </footer>
      </form>
    </>
  );
}
