import { prisma } from "@/lib/prisma";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import { useRouter } from "next/navigation";
import { NextApiRequest, NextApiResponse } from "next";

interface HTTPError {
  code: string;
  message: string;
}
export async function GET(request: NextApiRequest) {
  try {
    const { id } = request.query;
    const inventory = await prisma.product.findFirstOrThrow({
      where: { id: id as string },
    });
    return Response.json({ data: inventory }, { status: 200 });
  } catch (error) {
    if ((error as HTTPError).code === "P2025")
      return Response.json({ error: "Resource not Found" }, { status: 404 });
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
