
  'use server';
  import { redirect } from "next/navigation";
  import { revalidatePath } from "next/cache";
  import { prisma } from "@/lib/prisma";

  export async function createUserHasRole(formData: FormData) {
    const data = {
      role: formData.get('role') != '' ? { connect: { id: formData.get('role') as string } } : {},
user: formData.get('user') != '' ? { connect: { id: formData.get('user') as string } } : {},

    }
    
    const userHasRole = await prisma.userHasRole.create({ data });

    if (userHasRole) {
      redirect(`/user_has_roles/${userHasRole.id}`)
    }
  }

  export async function editUserHasRole(formData: FormData) {
    const id = formData.get('id') as string
    try {
      const data = {
        role: formData.get('role') != '' ? { connect: { id: formData.get('role') as string } } : { disconnect: true },
user: formData.get('user') != '' ? { connect: { id: formData.get('user') as string } } : { disconnect: true },

      }
      
      await prisma.userHasRole.update({
        where: { id },
        data,
      })
    } catch (error) {
      console.error('[EDIT ACTION ERROR:', error)
      return { message: error }
    }

    redirect(`/user_has_roles/${id}`)
  }

  export async function deleteUserHasRole (formData: FormData) {
    const id = formData.get('id') as string;
    try {
      await prisma.userHasRole.delete({
        where: { id },
      });
    } catch (error) {
      console.error('DELETE ACTION ERROR:', error);
      return { message: 'Unable to delete userHasRole' };
    }

    revalidatePath(`/user_has_roles`)
  }
  