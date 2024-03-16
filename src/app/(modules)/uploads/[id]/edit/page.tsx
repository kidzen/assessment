import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { editUpload } from "@/actions/upload";
import { Input } from "@/components/ui/Input";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";

export default async function UploadEditPage({
  params,
}: {
  params: { id: string };
}) {
  const upload = await prisma.upload.findUnique({
    where: { id: params.id },
    include: {
      Product: true,
    },
  });

  const Products = await prisma.product.findMany();

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
      <header className="mb-4">
        <Heading>Edit Upload</Heading>
      </header>
      <form action={editUpload} className="px-2 max-w-xl">
        <div>
          <Input
            type="text"
            label="Path"
            name="path"
            className="mb-2"
            defaultValue={upload.path}
            required
          />
        </div>
        <div>
          <Input
            type="text"
            label="Type"
            name="type"
            className="mb-2"
            defaultValue={upload.type}
          />
        </div>
        <div>
          <Input
            type="text"
            label="Mime_type"
            name="mime_type"
            className="mb-2"
            defaultValue={upload.mime_type}
          />
        </div>
        <div>
          <Input
            type="number"
            label="File_size"
            name="file_size"
            className="mb-2"
            defaultValue={upload.file_size}
          />
        </div>
        <div>
          <Select
            name="Product"
            className="mt-1 mb-2"
            label="Product"
            placeholder="Select Product"
            defaultValue={upload.Product.map((Product) => ({
              label: Product.id,
              value: Product.id,
            }))}
            isMulti
            options={Products.map((Product) => ({
              label: Product.id,
              value: Product.id,
            }))}
          />
        </div>

        <input type="hidden" name="id" value={upload.id} />

        <footer className="flex items-center justify-between mt-2">
          <Link href="/uploads" className="underline text-gray-500">
            Return to Uploads list
          </Link>

          <Button type="submit">Update</Button>
        </footer>
      </form>
    </>
  );
}
