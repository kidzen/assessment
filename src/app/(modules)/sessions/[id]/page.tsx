
  import Link from 'next/link';
  import { prisma } from '@/lib/prisma';
  import { Heading } from '@/components/ui/Heading';

  export default async function SessionPage({ params }: { params: { id: string } }) {
    const session = await prisma.session.findUnique({
      where: { id: params.id }
    });
    
    if (!session) {
      return (
    <>
      <header>
        <Heading>Session not found</Heading>
      </header>
      <footer>
        <Link href="/sessions">
          Return to Sessions list
        </Link>
      </footer>
    </>
  )
    }

    return (
      <>
        <header className="mt-2 mb-4">
          <Heading>Session #{session.id.substring(0,6)}...</Heading>
        </header>

        <section className="relative overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8 max-w-xl mb-4">
          <span
            className="absolute inset-x-0 bottom-0 h-21 bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600"
          ></span>
          <p className="text-gray-700 mb-4 last:mb-0"><strong className="text-gray-900">Session Token:</strong> {session.sessionToken}</p><p className="text-gray-700 mb-4 last:mb-0"><strong className="text-gray-900">User Id:</strong> {session.userId}</p><p className="text-gray-700 mb-4 last:mb-0"><strong className="text-gray-900">Expires:</strong> {new Date(session.expires).toLocaleString()}</p>
        </section>

        <footer>
          <Link
            href="/sessions"
            className="underline text-gray-500"
          >
            Return to Sessions list
          </Link>
        </footer>
      </>
    )
  }
  