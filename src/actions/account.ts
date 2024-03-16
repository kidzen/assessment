"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

export async function createAccount(formData: FormData) {
  const schema = z.object({
    type: z.string(),
    provider: z.string(),
    providerAccountId: z.string(),
    refresh_token: z.string(),
    access_token: z.string(),
    expires_at: z.number(),
    token_type: z.string(),
    scope: z.string(),
    id_token: z.string(),
    session_state: z.string(),
    user: z.object({}).optional(),
  });

  const data = schema.parse({
    type: formData.get("type"),
    provider: formData.get("provider"),
    providerAccountId: formData.get("providerAccountId"),
    refresh_token: formData.get("refresh_token"),
    access_token: formData.get("access_token"),
    expires_at: formData.get("expires_at"),
    token_type: formData.get("token_type"),
    scope: formData.get("scope"),
    id_token: formData.get("id_token"),
    session_state: formData.get("session_state"),
    user:
      formData.get("user") != ""
        ? { connect: { id: formData.get("user") } }
        : {},
  });

  const account = await prisma.account.create({ data });

  if (account) {
    redirect(`/accounts/${account.id}`);
  }
}

export async function editAccount(formData: FormData) {
  const id = formData.get("id") as string;
  try {
    const data = {
      type: formData.get("type") as string,
      provider: formData.get("provider") as string,
      providerAccountId: formData.get("providerAccountId") as string,
      refresh_token: formData.get("refresh_token") as string,
      access_token: formData.get("access_token") as string,
      expires_at: formData.get("expires_at") as unknown as number,
      token_type: formData.get("token_type") as string,
      scope: formData.get("scope") as string,
      id_token: formData.get("id_token") as string,
      session_state: formData.get("session_state") as string,
      user:
        formData.get("user") != ""
          ? { connect: { id: formData.get("user") as string } }
          : { disconnect: true },
    };

    await prisma.account.update({
      where: { id },
      data,
    });
  } catch (error) {
    console.error("[EDIT ACTION ERROR:", error);
    return { message: error };
  }

  redirect(`/accounts/${id}`);
}

export async function deleteAccount(formData: FormData) {
  const id = formData.get("id") as string;
  try {
    await prisma.account.delete({
      where: { id },
    });
  } catch (error) {
    console.error("DELETE ACTION ERROR:", error);
    return { message: "Unable to delete account" };
  }

  revalidatePath(`/accounts`);
}
