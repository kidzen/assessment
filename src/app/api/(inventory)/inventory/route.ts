import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const params: {
      take: number;
      // orderBy?: string;
      where?: {
        name: string;
      };
    } = { take: 10 };

    params.take = Number(request.nextUrl.searchParams.get("per-page"));
    const page = Number(request.nextUrl.searchParams.get("page"));

    const search = request.nextUrl.searchParams.get("search");
    if (search != null) params.where = { name: search };

    // const sort = request.nextUrl.searchParams.get("sort");
    // if (sort != null) params.orderBy = sort;

    const inventories = await prisma.product.findMany(params);

    return NextResponse.json({ data: inventories }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}
