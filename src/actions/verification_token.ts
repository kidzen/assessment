
  'use server';
  import { redirect } from "next/navigation";
  import { revalidatePath } from "next/cache";
  import { prisma } from "@/lib/prisma";

  export async function createVerificationToken(formData: FormData) {
    const data = {
      identifier: formData.get('identifier') as string,
token: formData.get('token') as string,
expires: new Date(formData.get('expires') as string).toISOString(),

    }
    
    const verificationToken = await prisma.verificationToken.create({ data });

    if (verificationToken) {
      redirect(`/verification_tokens/${verificationToken.id}`)
    }
  }

  export async function editVerificationToken(formData: FormData) {
    const id = formData.get('id') as string
    try {
      const data = {
        identifier: formData.get('identifier') as string,
token: formData.get('token') as string,
expires: new Date(formData.get('expires') as string).toISOString(),

      }
      
      await prisma.verificationToken.update({
        where: { id },
        data,
      })
    } catch (error) {
      console.error('[EDIT ACTION ERROR:', error)
      return { message: error }
    }

    redirect(`/verification_tokens/${id}`)
  }

  export async function deleteVerificationToken (formData: FormData) {
    const id = formData.get('id') as string;
    try {
      await prisma.verificationToken.delete({
        where: { id },
      });
    } catch (error) {
      console.error('DELETE ACTION ERROR:', error);
      return { message: 'Unable to delete verificationToken' };
    }

    revalidatePath(`/verification_tokens`)
  }
  