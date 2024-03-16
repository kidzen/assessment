import { prisma } from "@/lib/prisma";
import { NextRequest } from "next/server";

function NextCrud() {
  return async function (request: NextRequest) {
    const model = request.nextUrl.pathname.replace("/api/crud/", "");
    const resources = await (prisma as any)[model].findMany({ take: 10 });
    return Response.json({ data: resources });
  };
}

const handler = NextCrud();
export { handler as GET, handler as POST };
