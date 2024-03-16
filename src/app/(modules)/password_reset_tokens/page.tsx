import { prisma } from "@/lib/prisma";
import { deletePasswordResetToken } from "@/actions/password_reset_token";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";

export default async function PasswordResetTokensListPage() {
  const passwordResetTokens = await prisma.passwordResetToken.findMany();

  const breadcrumbs = [
    { name: "Dashboard", href: "/" },
    { name: "Password Reset Tokens", href: "#" },
  ];

  return (
    <>
      <Breadcrumbs elements={breadcrumbs} className="my-2" />

      <header className="flex justify-between mb-4">
        <Heading>All Password Reset Tokens</Heading>
        <Button
          as="a"
          href="/password_reset_tokens/create"
          className="font-medium"
        >
          New Password Reset Token
        </Button>
      </header>

      <section className="overflow-x-auto">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="text-left">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Email
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Token
              </th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                Expires
              </th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {passwordResetTokens.length === 0 && (
              <tr>
                <td colSpan={3} className="text-center text-gray-500 py-4">
                  No passwordResetTokens found
                </td>
              </tr>
            )}

            {passwordResetTokens.map((passwordResetToken) => (
              <tr key={passwordResetToken.id}>
                <td className="px-4 py-2 text-gray-700">
                  {passwordResetToken.email}
                </td>
                <td className="px-4 py-2 text-gray-700">
                  {passwordResetToken.token}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {new Date(passwordResetToken.expires).toLocaleString()}
                </td>

                <td className="px-4 py-2">
                  <div className="flex gap-x-1 h-full justify-center">
                    <Button
                      as="a"
                      href={`/password_reset_tokens/${passwordResetToken.id}`}
                      variant="ghost"
                      size="sm"
                      className="font-medium"
                    >
                      Show
                    </Button>
                    <Button
                      as="a"
                      href={`/password_reset_tokens/${passwordResetToken.id}/edit`}
                      variant="ghost"
                      size="sm"
                      className="font-medium"
                    >
                      Edit
                    </Button>
                    <form
                      action={deletePasswordResetToken}
                      className="inline-block"
                    >
                      <input
                        type="hidden"
                        name="id"
                        value={passwordResetToken.id}
                      />
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
