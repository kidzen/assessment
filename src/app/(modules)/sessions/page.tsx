
  import { prisma } from '@/lib/prisma';
  import { deleteSession } from '@/actions/session';
  import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
  import { Heading } from '@/components/ui/Heading';
  import { Button } from '@/components/ui/Button';

  export default async function SessionsListPage() {
    const sessions = await prisma.session.findMany();

    const breadcrumbs = [
      { name: 'Dashboard', href: '/' },
      { name: 'Sessions', href: '#' }
    ]

    return (
      <>
        <Breadcrumbs elements={breadcrumbs} className="my-2" />

        <header className="flex justify-between mb-4">
          <Heading>All Sessions</Heading>
          <Button
            as="a"
            href="/sessions/create"
            className="font-medium"
          >
           New Session
          </Button>
        </header>

        <section className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Session Token
      </th><th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        User Id
      </th><th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Expires
      </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sessions.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center text-gray-500 py-4">
                    No sessions found
                  </td>
                </tr>
              )}

              {sessions.map((session) => (
                <tr key={session.id}>
                  <td className="px-4 py-2 text-gray-700">
          {session.sessionToken}
        </td>
        <td className="px-4 py-2 text-gray-700">
          {session.userId}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {new Date(session.expires).toLocaleString()}
          </td>
          
                  <td className="px-4 py-2">
                    <div className="flex gap-x-1 h-full justify-center">
                      <Button
                        as="a"
                        href={`/sessions/${session.id}`}
                        variant="ghost"
                        size="sm"
                        className="font-medium"
                      >
                        Show
                      </Button>
                      <Button
                        as="a"
                        href={`/sessions/${session.id}/edit`}
                        variant="ghost"
                        size="sm"
                        className="font-medium"
                      >
                        Edit
                      </Button>
                      <form action={deleteSession} className="inline-block">
                        <input type="hidden" name="id" value={session.id} />
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
  