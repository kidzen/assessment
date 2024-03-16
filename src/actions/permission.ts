"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function createPermission(formData: FormData) {
  const data = {
    action: formData.get("action") as string,
    subject: formData.get("subject") as string,
    RoleHasPermission:
      formData.get("RoleHasPermission") != ""
        ? {
            connect: formData
              .getAll("RoleHasPermission")
              .map((RoleHasPermissionId) => ({
                id: RoleHasPermissionId as string,
              })),
          }
        : {},
  };

  const permission = await prisma.permission.create({ data });

  if (permission) {
    redirect(`/permissions/${permission.id}`);
  }
}

export async function editPermission(formData: FormData) {
  const id = formData.get("id") as string;
  try {
    const data = {
      action: formData.get("action") as string,
      subject: formData.get("subject") as string,
      RoleHasPermission:
        formData.get("RoleHasPermission") != ""
          ? {
              connect: formData
                .getAll("RoleHasPermission")
                .map((RoleHasPermissionId) => ({
                  id: RoleHasPermissionId as string,
                })),
            }
          : { deleteMany: {} },
    };

    await prisma.permission.update({
      where: { id },
      data,
    });
  } catch (error) {
    console.error("[EDIT ACTION ERROR:", error);
    return { message: error };
  }

  redirect(`/permissions/${id}`);
}

export async function deletePermission(formData: FormData) {
  const id = formData.get("id") as string;
  try {
    await prisma.permission.delete({
      where: { id },
    });
  } catch (error) {
    console.error("DELETE ACTION ERROR:", error);
    return { message: "Unable to delete permission" };
  }

  revalidatePath(`/permissions`);
}
