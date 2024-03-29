import { prisma } from "@/lib/prisma";
import { deletePermission } from "@/actions/permission";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export default async function PermissionsListPage() {
  const permissions = await prisma.permission.findMany();

  const breadcrumbs = [
    { name: "Dashboard", href: "/" },
    { name: "Permissions", href: "#" },
  ];

  return (
    <>
      <Breadcrumbs elements={breadcrumbs} className="my-2" />

      <header className="flex justify-between mb-4">
        <Heading>All Permissions</Heading>
        <Button as="a" href="/permissions/create" className="font-medium">
          New Permission
        </Button>
      </header>

      <section className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Action
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Subject
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {permissions.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center text-gray-500 py-4">
                  No permissions found
                </td>
              </tr>
            )}

            {permissions.map((permission) => (
              <tr key={permission.id}>
                <td className="px-4 py-2 text-gray-700">{permission.action}</td>
                <td className="px-4 py-2 text-gray-700">
                  {permission.subject}
                </td>

                <td className="px-4 py-2">
                  <div className="flex gap-x-1 h-full justify-center">
                    <Button
                      as="a"
                      href={`/permissions/${permission.id}`}
                      variant="ghost"
                      size="sm"
                      className="font-medium"
                    >
                      Show
                    </Button>
                    <Button
                      as="a"
                      href={`/permissions/${permission.id}/edit`}
                      variant="ghost"
                      size="sm"
                      className="font-medium"
                    >
                      Edit
                    </Button>
                    <form action={deletePermission} className="inline-block">
                      <input type="hidden" name="id" value={permission.id} />
                      <Button
                        type="submit"
                        variant="ghost"
                        size="sm"
                        className="font-medium text-red-600 hover:bg-red-100 disabled:bg-red-100"
                      >
                        Delete
                      </Button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
}
