import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Heading } from "@/components/ui/Heading";

export default async function PermissionPage({
  params,
}: {
  params: { id: string };
}) {
  const permission = await prisma.permission.findUnique({
    where: { id: params.id },
  });

  if (!permission) {
    return (
      <>
        <header>
          <Heading>Permission not found</Heading>
        </header>
        <footer>
          <Link href="/permissions">Return to Permissions list</Link>
        </footer>
      </>
    );
  }

  return (
    <>
      <header className="mt-2 mb-4">
        <Heading>Permission #{permission.id.substring(0, 6)}...</Heading>
      </header>

      <section className="relative overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8 max-w-xl mb-4">
        <span className="absolute inset-x-0 bottom-0 h-21 bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600"></span>
        <p className="text-gray-700 mb-4 last:mb-0">
          <strong className="text-gray-900">Action:</strong> {permission.action}
        </p>
        <p className="text-gray-700 mb-4 last:mb-0">
          <strong className="text-gray-900">Subject:</strong>{" "}
          {permission.subject}
        </p>
      </section>

      <footer>
        <Link href="/permissions" className="underline text-gray-500">
          Return to Permissions list
        </Link>
      </footer>
    </>
  );
}
