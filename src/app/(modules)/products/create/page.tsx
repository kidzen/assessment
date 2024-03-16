
  import Link from 'next/link';
  import { prisma } from '@/lib/prisma';
  import { createProduct } from '@/actions/product';
  import { Input } from '@/components/ui/Input';
  import { Heading } from '@/components/ui/Heading';
  import { Button } from '@/components/ui/Button';
  import { Select } from '@/components/ui/Select';
  
  export default async function ProductCreatePage() {
    
    const images = await prisma.upload.findMany();
  
    return (
      <>
        <header className="mb-4">
          <Heading>Create Product</Heading>
        </header>
        <form action={createProduct} className="px-2 max-w-xl">
          <div>
    <Input
      type="text"
      label="Name"
      name="name"
      className="mb-2"
      
      
      required
      
    />
  </div><div>
    <Input
      type="text"
      label="Supplier"
      name="supplier"
      className="mb-2"
      
      
      required
      
    />
  </div><div>
    
    <Select
      name="image"
      className="mt-1 mb-2"
      label="Image"
      placeholder="Select Image"
      
      
      
      
      options={images.map((image) => ({
        label: image.id,
        value: image.id,
      }))}
    />
  
  </div>

          <footer className="flex items-center justify-between mt-2">
            <Link
              href="/products"
              className="underline text-gray-500"
            >
              Return to Products list
            </Link>
  
            <Button
              type="submit"
            >
              Create
            </Button>
          </footer>
        </form>
      </>
    )
  }
  