"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function createSession(formData: FormData) {
  const data = {
    sessionToken: formData.get("sessionToken") as string,
    expires: new Date(formData.get("expires") as string).toISOString(),
    user:
      formData.get("user") != ""
        ? { connect: { id: formData.get("user") as string } }
        : {},
  };

  const session = await prisma.session.create({ data });

  if (session) {
    redirect(`/sessions/${session.id}`);
  }
}

export async function editSession(formData: FormData) {
  const id = formData.get("id") as string;
  try {
    const data = {
      sessionToken: formData.get("sessionToken") as string,
      expires: new Date(formData.get("expires") as string).toISOString(),
      user:
        formData.get("user") != ""
          ? { connect: { id: formData.get("user") as string } }
          : { disconnect: true },
    };

    await prisma.session.update({
      where: { id },
      data,
    });
  } catch (error) {
    console.error("[EDIT ACTION ERROR:", error);
    return { message: error };
  }

  redirect(`/sessions/${id}`);
}

export async function deleteSession(formData: FormData) {
  const id = formData.get("id") as string;
  try {
    await prisma.session.delete({
      where: { id },
    });
  } catch (error) {
    console.error("DELETE ACTION ERROR:", error);
    return { message: "Unable to delete session" };
  }

  revalidatePath(`/sessions`);
}
