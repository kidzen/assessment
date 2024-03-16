"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

export async function createUpload(formData: FormData) {
  const data = {
    path: formData.get("path") as string,
    type: formData.get("type") as string,
    mime_type: formData.get("mime_type") as string,
    file_size: Number(formData.get("file_size")) as number,
    Product:
      formData.get("Product") != ""
        ? {
            connect: formData
              .getAll("Product")
              .map((ProductId) => ({ id: ProductId as string })),
          }
        : {},
  };

  const upload = await prisma.upload.create({ data });

  if (upload) {
    redirect(`/uploads/${upload.id}`);
  }
}

export async function editUpload(formData: FormData) {
  const id = formData.get("id") as string;
  try {
    const data = {
      path: formData.get("path") as string,
      type: formData.get("type") as string,
      mime_type: formData.get("mime_type") as string,
      file_size: Number(formData.get("file_size")) as number,
      Product:
        formData.get("Product") != ""
          ? {
              connect: formData
                .getAll("Product")
                .map((ProductId) => ({ id: ProductId as string })),
            }
          : { set: [] },
    };

    await prisma.upload.update({
      where: { id },
      data,
    });
  } catch (error) {
    console.error("[EDIT ACTION ERROR:", error);
    return { message: error };
  }

  redirect(`/uploads/${id}`);
}

export async function deleteUpload(formData: FormData) {
  const id = formData.get("id") as string;
  try {
    await prisma.upload.delete({
      where: { id },
    });
  } catch (error) {
    console.error("DELETE ACTION ERROR:", error);
    return { message: "Unable to delete upload" };
  }

  revalidatePath(`/uploads`);
}
