
  import { prisma } from '@/lib/prisma';
  import { deleteVerificationToken } from '@/actions/verification_token';
  import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
  import { Heading } from '@/components/ui/Heading';
  import { Button } from '@/components/ui/Button';

  export default async function VerificationTokensListPage() {
    const verificationTokens = await prisma.verificationToken.findMany();

    const breadcrumbs = [
      { name: 'Dashboard', href: '/' },
      { name: 'Verification Tokens', href: '#' }
    ]

    return (
      <>
        <Breadcrumbs elements={breadcrumbs} className="my-2" />

        <header className="flex justify-between mb-4">
          <Heading>All Verification Tokens</Heading>
          <Button
            as="a"
            href="/verification_tokens/create"
            className="font-medium"
          >
           New Verification Token
          </Button>
        </header>

        <section className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Identifier
      </th><th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Token
      </th><th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Expires
      </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {verificationTokens.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center text-gray-500 py-4">
                    No verificationTokens found
                  </td>
                </tr>
              )}

              {verificationTokens.map((verificationToken) => (
                <tr key={verificationToken.id}>
                  <td className="px-4 py-2 text-gray-700">
          {verificationToken.identifier}
        </td>
        <td className="px-4 py-2 text-gray-700">
          {verificationToken.token}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {new Date(verificationToken.expires).toLocaleString()}
          </td>
          
                  <td className="px-4 py-2">
                    <div className="flex gap-x-1 h-full justify-center">
                      <Button
                        as="a"
                        href={`/verification_tokens/${verificationToken.id}`}
                        variant="ghost"
                        size="sm"
                        className="font-medium"
                      >
                        Show
                      </Button>
                      <Button
                        as="a"
                        href={`/verification_tokens/${verificationToken.id}/edit`}
                        variant="ghost"
                        size="sm"
                        className="font-medium"
                      >
                        Edit
                      </Button>
                      <form action={deleteVerificationToken} className="inline-block">
                        <input type="hidden" name="id" value={verificationToken.id} />
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
  