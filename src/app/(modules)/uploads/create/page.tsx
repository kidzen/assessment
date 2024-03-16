import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { createUpload } from "@/actions/upload";
import { Input } from "@/components/ui/Input";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";

export default async function UploadCreatePage() {
  const Products = await prisma.product.findMany();

  return (
    <>
      <header className="mb-4">
        <Heading>Create Upload</Heading>
      </header>
      <form action={createUpload} className="px-2 max-w-xl">
        <div>
          <Input
            type="text"
            label="Path"
            name="path"
            className="mb-2"
            required
          />
        </div>
        <div>
          <Input type="text" label="Type" name="type" className="mb-2" />
        </div>
        <div>
          <Input
            type="text"
            label="Mime_type"
            name="mime_type"
            className="mb-2"
          />
        </div>
        <div>
          <Input
            type="number"
            label="File_size"
            name="file_size"
            className="mb-2"
          />
        </div>
        <div>
          <Select
            name="Product"
            className="mt-1 mb-2"
            label="Product"
            placeholder="Select Product"
            isMulti
            options={Products.map((Product) => ({
              label: Product.id,
              value: Product.id,
            }))}
          />
        </div>

        <footer className="flex items-center justify-between mt-2">
          <Link href="/uploads" className="underline text-gray-500">
            Return to Uploads list
          </Link>

          <Button type="submit">Create</Button>
        </footer>
      </form>
    </>
  );
}
