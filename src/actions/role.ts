
  'use server';
  import { redirect } from "next/navigation";
  import { revalidatePath } from "next/cache";
  import { prisma } from "@/lib/prisma";

  export async function createRole(formData: FormData) {
    const data = {
      name: formData.get('name') as string,
RoleHasPermission: formData.get('RoleHasPermission') != '' ? {
    connect: formData.getAll('RoleHasPermission').map(RoleHasPermissionId => ({ id: RoleHasPermissionId as string}))
  } : {},
UserHasRole: formData.get('UserHasRole') != '' ? {
    connect: formData.getAll('UserHasRole').map(UserHasRoleId => ({ id: UserHasRoleId as string}))
  } : {},

    }
    
    const role = await prisma.role.create({ data });

    if (role) {
      redirect(`/roles/${role.id}`)
    }
  }

  export async function editRole(formData: FormData) {
    const id = formData.get('id') as string
    try {
      const data = {
        name: formData.get('name') as string,
RoleHasPermission: formData.get('RoleHasPermission') != '' ? {
    connect: formData.getAll('RoleHasPermission').map(RoleHasPermissionId => ({ id: RoleHasPermissionId as string}))
  } : { deleteMany: {} },
UserHasRole: formData.get('UserHasRole') != '' ? {
    connect: formData.getAll('UserHasRole').map(UserHasRoleId => ({ id: UserHasRoleId as string}))
  } : { deleteMany: {} },

      }
      
      await prisma.role.update({
        where: { id },
        data,
      })
    } catch (error) {
      console.error('[EDIT ACTION ERROR:', error)
      return { message: error }
    }

    redirect(`/roles/${id}`)
  }

  export async function deleteRole (formData: FormData) {
    const id = formData.get('id') as string;
    try {
      await prisma.role.delete({
        where: { id },
      });
    } catch (error) {
      console.error('DELETE ACTION ERROR:', error);
      return { message: 'Unable to delete role' };
    }

    revalidatePath(`/roles`)
  }
  