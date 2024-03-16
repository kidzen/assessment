import { prisma } from "@/lib/prisma";
import { PrismaClientValidationError } from "@prisma/client/runtime/library";
import { useRouter } from "next/navigation";
import { NextRequest } from "next/server";

interface HTTPError {
  code: string;
  message: string;
}
async function handler(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const inventory = await prisma.product.findUnique({
      where: { id: id as string },
    });
    return Response.json({ data: inventory }, { status: 200 });
  } catch (error) {
    if ((error as HTTPError).code === "P2025")
      return Response.json({ error: "Resource not Found" }, { status: 404 });
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
export { handler as GET };
