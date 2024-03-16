import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Heading } from "@/components/ui/Heading";

export default async function UploadPage({
  params,
}: {
  params: { id: string };
}) {
  const upload = await prisma.upload.findUnique({
    where: { id: params.id },
  });

  if (!upload) {
    return (
      <>
        <header>
          <Heading>Upload not found</Heading>
        </header>
        <footer>
          <Link href="/uploads">Return to Uploads list</Link>
        </footer>
      </>
    );
  }

  return (
    <>
      <header className="mt-2 mb-4">
        <Heading>Upload #{upload.id.substring(0, 6)}...</Heading>
      </header>

      <section className="relative overflow-hidden rounded-lg border border-gray-200 p-4 sm:p-6 lg:p-8 max-w-xl mb-4">
        <span className="absolute inset-x-0 bottom-0 h-21 bg-gradient-to-r from-indigo-300 via-indigo-500 to-indigo-600"></span>
        <p className="text-gray-700 mb-4 last:mb-0">
          <strong className="text-gray-900">Path:</strong> {upload.path}
        </p>
        <p className="text-gray-700 mb-4 last:mb-0">
          <strong className="text-gray-900">Type:</strong> {upload.type}
        </p>
        <p className="text-gray-700 mb-4 last:mb-0">
          <strong className="text-gray-900">Mime_type:</strong>{" "}
          {upload.mime_type}
        </p>
        <p className="text-gray-700 mb-4 last:mb-0">
          <strong className="text-gray-900">File_size:</strong>{" "}
          {upload.file_size}
        </p>
      </section>

      <footer>
        <Link href="/uploads" className="underline text-gray-500">
          Return to Uploads list
        </Link>
      </footer>
    </>
  );
}
