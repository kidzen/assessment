import { prisma } from "@/lib/prisma";
import { deleteAccount } from "@/actions/account";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export default async function AccountsListPage() {
  const accounts = await prisma.account.findMany();

  const breadcrumbs = [
    { name: "Dashboard", href: "/" },
    { name: "Accounts", href: "#" },
  ];

  return (
    <>
      <Breadcrumbs elements={breadcrumbs} className="my-2" />

      <header className="flex justify-between mb-4">
        <Heading>All Accounts</Heading>
        <Button as="a" href="/accounts/create" className="font-medium">
          New Account
        </Button>
      </header>

      <section className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                User Id
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Type
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Provider
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Provider Account Id
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Refresh_token
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Access_token
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Expires_at
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Token_type
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Scope
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Id_token
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Session_state
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {accounts.length === 0 && (
              <tr>
                <td colSpan={13} className="text-center text-gray-500 py-4">
                  No accounts found
                </td>
              </tr>
            )}

            {accounts.map((account) => (
              <tr key={account.id}>
                <td className="px-4 py-2 text-gray-700">{account.userId}</td>
                <td className="px-4 py-2 text-gray-700">{account.type}</td>
                <td className="px-4 py-2 text-gray-700">{account.provider}</td>
                <td className="px-4 py-2 text-gray-700">
                  {account.providerAccountId}
                </td>
                <td className="px-4 py-2 text-gray-700">
                  {account.refresh_token}
                </td>
                <td className="px-4 py-2 text-gray-700">
                  {account.access_token}
                </td>
                <td className="px-4 py-2 text-gray-700">
                  {account.expires_at}
                </td>
                <td className="px-4 py-2 text-gray-700">
                  {account.token_type}
                </td>
                <td className="px-4 py-2 text-gray-700">{account.scope}</td>
                <td className="px-4 py-2 text-gray-700">{account.id_token}</td>
                <td className="px-4 py-2 text-gray-700">
                  {account.session_state}
                </td>

                <td className="px-4 py-2">
                  <div className="flex gap-x-1 h-full justify-center">
                    <Button
                      as="a"
                      href={`/accounts/${account.id}`}
                      variant="ghost"
                      size="sm"
                      className="font-medium"
                    >
                      Show
                    </Button>
                    <Button
                      as="a"
                      href={`/accounts/${account.id}/edit`}
                      variant="ghost"
                      size="sm"
                      className="font-medium"
                    >
                      Edit
                    </Button>
                    <form action={deleteAccount} className="inline-block">
                      <input type="hidden" name="id" value={account.id} />
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
