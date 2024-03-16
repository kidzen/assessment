
  'use server';
  import { redirect } from "next/navigation";
  import { revalidatePath } from "next/cache";
  import { prisma } from "@/lib/prisma";

  export async function createPasswordResetToken(formData: FormData) {
    const data = {
      email: formData.get('email') as string,
token: formData.get('token') as string,
expires: new Date(formData.get('expires') as string).toISOString(),

    }
    
    const passwordResetToken = await prisma.passwordResetToken.create({ data });

    if (passwordResetToken) {
      redirect(`/password_reset_tokens/${passwordResetToken.id}`)
    }
  }

  export async function editPasswordResetToken(formData: FormData) {
    const id = formData.get('id') as string
    try {
      const data = {
        email: formData.get('email') as string,
token: formData.get('token') as string,
expires: new Date(formData.get('expires') as string).toISOString(),

      }
      
      await prisma.passwordResetToken.update({
        where: { id },
        data,
      })
    } catch (error) {
      console.error('[EDIT ACTION ERROR:', error)
      return { message: error }
    }

    redirect(`/password_reset_tokens/${id}`)
  }

  export async function deletePasswordResetToken (formData: FormData) {
    const id = formData.get('id') as string;
    try {
      await prisma.passwordResetToken.delete({
        where: { id },
      });
    } catch (error) {
      console.error('DELETE ACTION ERROR:', error);
      return { message: 'Unable to delete passwordResetToken' };
    }

    revalidatePath(`/password_reset_tokens`)
  }
  