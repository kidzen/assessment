
  import { prisma } from '@/lib/prisma';
  import { deleteUpload } from '@/actions/upload';
  import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
  import { Heading } from '@/components/ui/Heading';
  import { Button } from '@/components/ui/Button';

  export default async function UploadsListPage() {
    const uploads = await prisma.upload.findMany();

    const breadcrumbs = [
      { name: 'Dashboard', href: '/' },
      { name: 'Uploads', href: '#' }
    ]

    return (
      <>
        <Breadcrumbs elements={breadcrumbs} className="my-2" />

        <header className="flex justify-between mb-4">
          <Heading>All Uploads</Heading>
          <Button
            as="a"
            href="/uploads/create"
            className="font-medium"
          >
           New Upload
          </Button>
        </header>

        <section className="overflow-x-auto">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="text-left">
              <tr>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Path
      </th><th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Type
      </th><th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        Mime_type
      </th><th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
        File_size
      </th>
                <th className="px-4 py-2"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {uploads.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center text-gray-500 py-4">
                    No uploads found
                  </td>
                </tr>
              )}

              {uploads.map((upload) => (
                <tr key={upload.id}>
                  <td className="px-4 py-2 text-gray-700">
          {upload.path}
        </td>
        <td className="px-4 py-2 text-gray-700">
          {upload.type}
        </td>
        <td className="px-4 py-2 text-gray-700">
          {upload.mime_type}
        </td>
        <td className="px-4 py-2 text-gray-700">
          {upload.file_size}
        </td>
        
                  <td className="px-4 py-2">
                    <div className="flex gap-x-1 h-full justify-center">
                      <Button
                        as="a"
                        href={`/uploads/${upload.id}`}
                        variant="ghost"
                        size="sm"
                        className="font-medium"
                      >
                        Show
                      </Button>
                      <Button
                        as="a"
                        href={`/uploads/${upload.id}/edit`}
                        variant="ghost"
                        size="sm"
                        className="font-medium"
                      >
                        Edit
                      </Button>
                      <form action={deleteUpload} className="inline-block">
                        <input type="hidden" name="id" value={upload.id} />
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
  