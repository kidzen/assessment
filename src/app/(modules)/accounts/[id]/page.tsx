
  import Link from 'next/link';
  import { prisma } from '@/lib/prisma';
  import { Heading } from '@/components/ui/Heading';

  export default async function AccountPage({ params }: { params: { id: string } }) {
    const account = await prisma.account.findUnique({
      where: { id: params.id }
    });
    
    if (!account) {
      return (
    <>
      <header>
        <Heading>Account not found</Heading>
      </header>
      <footer>
        <Link href="/accounts">
          Return to Accounts list
        </Link>
      </footer>
    </>
  )
    }

    return (
      <>
        <header className="mt-2 mb-4">
          <Heading>Account #{account.id.substring(0,6)}...</Heading>
        </header>

        <section className="relative overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8 max-w-xl mb-4">
          <span
            className="absolute inset-x-0 bottom-0 h-21 bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600"
          ></span>
          <p className="text-gray-700 mb-4 last:mb-0"><strong className="text-gray-900">User Id:</strong> {account.userId}</p><p className="text-gray-700 mb-4 last:mb-0"><strong className="text-gray-900">Type:</strong> {account.type}</p><p className="text-gray-700 mb-4 last:mb-0"><strong className="text-gray-900">Provider:</strong> {account.provider}</p><p className="text-gray-700 mb-4 last:mb-0"><strong className="text-gray-900">Provider Account Id:</strong> {account.providerAccountId}</p><p className="text-gray-700 mb-4 last:mb-0"><strong className="text-gray-900">Refresh_token:</strong> {account.refresh_token}</p><p className="text-gray-700 mb-4 last:mb-0"><strong className="text-gray-900">Access_token:</strong> {account.access_token}</p><p className="text-gray-700 mb-4 last:mb-0"><strong className="text-gray-900">Expires_at:</strong> {account.expires_at}</p><p className="text-gray-700 mb-4 last:mb-0"><strong className="text-gray-900">Token_type:</strong> {account.token_type}</p><p className="text-gray-700 mb-4 last:mb-0"><strong className="text-gray-900">Scope:</strong> {account.scope}</p><p className="text-gray-700 mb-4 last:mb-0"><strong className="text-gray-900">Id_token:</strong> {account.id_token}</p><p className="text-gray-700 mb-4 last:mb-0"><strong className="text-gray-900">Session_state:</strong> {account.session_state}</p>
        </section>

        <footer>
          <Link
            href="/accounts"
            className="underline text-gray-500"
          >
            Return to Accounts list
          </Link>
        </footer>
      </>
    )
  }
  