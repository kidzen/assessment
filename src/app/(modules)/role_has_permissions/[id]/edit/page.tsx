
  import Link from 'next/link';
  import { prisma } from '@/lib/prisma';
  import { editRoleHasPermission } from '@/actions/role_has_permission';
  import { Input } from '@/components/ui/Input';
  import { Heading } from '@/components/ui/Heading';
  import { Button } from '@/components/ui/Button';
  import { Select } from '@/components/ui/Select';

  export default async function RoleHasPermissionEditPage({ params }: { params: { id: string } }) {
    const roleHasPermission = await prisma.roleHasPermission.findUnique({
      where: { id: params.id },
      include: {
        role: true,
permission: true
      }
      
    });

    
    
      const roles = await prisma.role.findMany();
  
    
      const permissions = await prisma.permission.findMany();
  
    
    if (!roleHasPermission) {
      return (
    <>
      <header>
        <Heading>Role Has Permission not found</Heading>
      </header>
      <footer>
        <Link href="/role_has_permissions">
          Return to Role Has Permissions list
        </Link>
      </footer>
    </>
  )
    }

    return (
      <>
        <header className="mb-4">
          <Heading>Edit RoleHasPermission</Heading>
        </header>
        <form action={editRoleHasPermission} className="px-2 max-w-xl">
          <div>
    
    <Select
      name="role"
      className="mt-1 mb-2"
      label="Role"
      placeholder="Select Role"
      defaultValue={{ label: roleHasPermission.role?.id, value: roleHasPermission.role?.id }}
      required
      
      
      options={roles.map((role) => ({
        label: role.id,
        value: role.id,
      }))}
    />
  
  </div><div>
    
    <Select
      name="permission"
      className="mt-1 mb-2"
      label="Permission"
      placeholder="Select Permission"
      defaultValue={{ label: roleHasPermission.permission?.id, value: roleHasPermission.permission?.id }}
      required
      
      
      options={permissions.map((permission) => ({
        label: permission.id,
        value: permission.id,
      }))}
    />
  
  </div>

          <input type="hidden" name="id" value={roleHasPermission.id} />

          <footer className="flex items-center justify-between mt-2">
            <Link
              href="/role_has_permissions"
              className="underline text-gray-500"
            >
              Return to Role Has Permissions list
            </Link>
  
            <Button
              type="submit"
            >
              Update
            </Button>
          </footer>
        </form>
      </>
    )
  }
  