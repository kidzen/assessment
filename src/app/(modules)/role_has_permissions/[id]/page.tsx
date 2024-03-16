
  import Link from 'next/link';
  import { prisma } from '@/lib/prisma';
  import { Heading } from '@/components/ui/Heading';

  export default async function RoleHasPermissionPage({ params }: { params: { id: string } }) {
    const roleHasPermission = await prisma.roleHasPermission.findUnique({
      where: { id: params.id }
    });
    
    if (!roleHasPermission) {
      return (
    <>
      <header>
        <Heading>Role Has Permission not found</Heading>
      </header>
      <footer>
        <Link href="/role_has_permissions">
          Return to Role Has Permissions list
        </Link>
      </footer>
    </>
  )
    }

    return (
      <>
        <header className="mt-2 mb-4">
          <Heading>Role Has Permission #{roleHasPermission.id.substring(0,6)}...</Heading>
        </header>

        <section className="relative overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8 max-w-xl mb-4">
          <span
            className="absolute inset-x-0 bottom-0 h-21 bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600"
          ></span>
          <p className="text-gray-700 mb-4 last:mb-0"><strong className="text-gray-900">Role_id:</strong> {roleHasPermission.role_id}</p><p className="text-gray-700 mb-4 last:mb-0"><strong className="text-gray-900">Permission_id:</strong> {roleHasPermission.permission_id}</p>
        </section>

        <footer>
          <Link
            href="/role_has_permissions"
            className="underline text-gray-500"
          >
            Return to Role Has Permissions list
          </Link>
        </footer>
      </>
    )
  }
  