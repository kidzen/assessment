
  import Link from 'next/link';
  import { prisma } from '@/lib/prisma';
  import { Heading } from '@/components/ui/Heading';

  export default async function RolePage({ params }: { params: { id: string } }) {
    const role = await prisma.role.findUnique({
      where: { id: params.id }
    });
    
    if (!role) {
      return (
    <>
      <header>
        <Heading>Role not found</Heading>
      </header>
      <footer>
        <Link href="/roles">
          Return to Roles list
        </Link>
      </footer>
    </>
  )
    }

    return (
      <>
        <header className="mt-2 mb-4">
          <Heading>Role #{role.id.substring(0,6)}...</Heading>
        </header>

        <section className="relative overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8 max-w-xl mb-4">
          <span
            className="absolute inset-x-0 bottom-0 h-21 bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600"
          ></span>
          <p className="text-gray-700 mb-4 last:mb-0"><strong className="text-gray-900">Name:</strong> {role.name}</p>
        </section>

        <footer>
          <Link
            href="/roles"
            className="underline text-gray-500"
          >
            Return to Roles list
          </Link>
        </footer>
      </>
    )
  }
  