import { prisma } from "@/lib/prisma";
import { deleteUserHasRole } from "@/actions/user_has_role";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export default async function UserHasRolesListPage() {
  const userHasRoles = await prisma.userHasRole.findMany();

  const breadcrumbs = [
    { name: "Dashboard", href: "/" },
    { name: "User Has Roles", href: "#" },
  ];

  return (
    <>
      <Breadcrumbs elements={breadcrumbs} className="my-2" />

      <header className="flex justify-between mb-4">
        <Heading>All User Has Roles</Heading>
        <Button as="a" href="/user_has_roles/create" className="font-medium">
          New User Has Role
        </Button>
      </header>

      <section className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Role_id
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                User_id
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {userHasRoles.length === 0 && (
              <tr>
                <td colSpan={5} className="text-center text-gray-500 py-4">
                  No userHasRoles found
                </td>
              </tr>
            )}

            {userHasRoles.map((userHasRole) => (
              <tr key={userHasRole.id}>
                <td className="px-4 py-2 text-gray-700">
                  {userHasRole.role_id}
                </td>
                <td className="px-4 py-2 text-gray-700">
                  {userHasRole.user_id}
                </td>

                <td className="px-4 py-2">
                  <div className="flex gap-x-1 h-full justify-center">
                    <Button
                      as="a"
                      href={`/user_has_roles/${userHasRole.id}`}
                      variant="ghost"
                      size="sm"
                      className="font-medium"
                    >
                      Show
                    </Button>
                    <Button
                      as="a"
                      href={`/user_has_roles/${userHasRole.id}/edit`}
                      variant="ghost"
                      size="sm"
                      className="font-medium"
                    >
                      Edit
                    </Button>
                    <form action={deleteUserHasRole} className="inline-block">
                      <input type="hidden" name="id" value={userHasRole.id} />
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
