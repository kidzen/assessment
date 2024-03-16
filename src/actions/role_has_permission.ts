"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function createRoleHasPermission(formData: FormData) {
  const data = {
    role:
      formData.get("role") != ""
        ? { connect: { id: formData.get("role") as string } }
        : {},
    permission:
      formData.get("permission") != ""
        ? { connect: { id: formData.get("permission") as string } }
        : {},
  };

  const roleHasPermission = await prisma.roleHasPermission.create({ data });

  if (roleHasPermission) {
    redirect(`/role_has_permissions/${roleHasPermission.id}`);
  }
}

export async function editRoleHasPermission(formData: FormData) {
  const id = formData.get("id") as string;
  try {
    const data = {
      role:
        formData.get("role") != ""
          ? { connect: { id: formData.get("role") as string } }
          : { disconnect: true },
      permission:
        formData.get("permission") != ""
          ? { connect: { id: formData.get("permission") as string } }
          : { disconnect: true },
    };

    await prisma.roleHasPermission.update({
      where: { id },
      data,
    });
  } catch (error) {
    console.error("[EDIT ACTION ERROR:", error);
    return { message: error };
  }

  redirect(`/role_has_permissions/${id}`);
}

export async function deleteRoleHasPermission(formData: FormData) {
  const id = formData.get("id") as string;
  try {
    await prisma.roleHasPermission.delete({
      where: { id },
    });
  } catch (error) {
    console.error("DELETE ACTION ERROR:", error);
    return { message: "Unable to delete roleHasPermission" };
  }

  revalidatePath(`/role_has_permissions`);
}
