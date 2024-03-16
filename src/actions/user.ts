
  'use server';
  import { redirect } from "next/navigation";
  import { revalidatePath } from "next/cache";
  import { prisma } from "@/lib/prisma";

  export async function createUser(formData: FormData) {
    const data = {
      name: formData.get('name') as string,
email: formData.get('email') as string,
password: formData.get('password') as string,
emailVerified: new Date(formData.get('emailVerified') as string).toISOString(),
image: formData.get('image') as string,
accounts: formData.get('accounts') != '' ? {
    connect: formData.getAll('accounts').map(accountId => ({ id: accountId as string}))
  } : {},
sessions: formData.get('sessions') != '' ? {
    connect: formData.getAll('sessions').map(sessionId => ({ id: sessionId as string}))
  } : {},
UserHasRole: formData.get('UserHasRole') != '' ? {
    connect: formData.getAll('UserHasRole').map(UserHasRoleId => ({ id: UserHasRoleId as string}))
  } : {},

    }
    
    const user = await prisma.user.create({ data });

    if (user) {
      redirect(`/users/${user.id}`)
    }
  }

  export async function editUser(formData: FormData) {
    const id = formData.get('id') as string
    try {
      const data = {
        name: formData.get('name') as string,
email: formData.get('email') as string,
password: formData.get('password') as string,
emailVerified: new Date(formData.get('emailVerified') as string).toISOString(),
image: formData.get('image') as string,
accounts: formData.get('accounts') != '' ? {
    connect: formData.getAll('accounts').map(accountId => ({ id: accountId as string}))
  } : { deleteMany: {} },
sessions: formData.get('sessions') != '' ? {
    connect: formData.getAll('sessions').map(sessionId => ({ id: sessionId as string}))
  } : { deleteMany: {} },
UserHasRole: formData.get('UserHasRole') != '' ? {
    connect: formData.getAll('UserHasRole').map(UserHasRoleId => ({ id: UserHasRoleId as string}))
  } : { deleteMany: {} },

      }
      
      await prisma.user.update({
        where: { id },
        data,
      })
    } catch (error) {
      console.error('[EDIT ACTION ERROR:', error)
      return { message: error }
    }

    redirect(`/users/${id}`)
  }

  export async function deleteUser (formData: FormData) {
    const id = formData.get('id') as string;
    try {
      await prisma.user.delete({
        where: { id },
      });
    } catch (error) {
      console.error('DELETE ACTION ERROR:', error);
      return { message: 'Unable to delete user' };
    }

    revalidatePath(`/users`)
  }
  