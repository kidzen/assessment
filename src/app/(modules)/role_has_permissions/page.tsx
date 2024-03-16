
  import { prisma } from '@/lib/prisma';
  import { deleteRoleHasPermission } from '@/actions/role_has_permission';
  import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
  import { Heading } from '@/components/ui/Heading';
  import { Button } from '@/components/ui/Button';

  export default async function RoleHasPermissionsListPage() {
    const roleHasPermissions = await prisma.roleHasPermission.findMany();

    const breadcrumbs = [
      { name: 'Dashboard', href: '/' },
      { name: 'Role Has Permissions', href: '#' }
    ]

    return (
      <>
        <Breadcrumbs elements={breadcrumbs} className="my-2" />

        <header className="flex justify-between mb-4">
          <Heading>All Role Has Permissions</Heading>
          <Button
            as="a"
            href="/role_has_permissions/create"
            className="font-medium"
          >
           New Role Has Permission
          </Button>
        </header>

        <section className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Role_id
      </th><th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Permission_id
      </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {roleHasPermissions.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center text-gray-500 py-4">
                    No roleHasPermissions found
                  </td>
                </tr>
              )}

              {roleHasPermissions.map((roleHasPermission) => (
                <tr key={roleHasPermission.id}>
                  <td className="px-4 py-2 text-gray-700">
          {roleHasPermission.role_id}
        </td>
        <td className="px-4 py-2 text-gray-700">
          {roleHasPermission.permission_id}
        </td>
        
                  <td className="px-4 py-2">
                    <div className="flex gap-x-1 h-full justify-center">
                      <Button
                        as="a"
                        href={`/role_has_permissions/${roleHasPermission.id}`}
                        variant="ghost"
                        size="sm"
                        className="font-medium"
                      >
                        Show
                      </Button>
                      <Button
                        as="a"
                        href={`/role_has_permissions/${roleHasPermission.id}/edit`}
                        variant="ghost"
                        size="sm"
                        className="font-medium"
                      >
                        Edit
                      </Button>
                      <form action={deleteRoleHasPermission} className="inline-block">
                        <input type="hidden" name="id" value={roleHasPermission.id} />
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
    )
  }
  