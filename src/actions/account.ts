"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function createAccount(formData: FormData) {
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
        : {},
  };

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
