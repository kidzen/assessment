import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

interface HTTPContext {
  params: {
    context: string[];
  };
}

interface ResourceContext {
  model: string;
  method: string;
  id: string;
  data: any;
}

// FIXME: missing Prisma ExtArgs types and Model types
// TODO: map into typeMap from prisma
interface PrismaQuery {
  findUnique: (...args: any) => Promise<any>;
  findMany: (...args: any) => Promise<any>;
  delete: (...args: any) => Promise<any>;
  create: (...args: any) => Promise<any>;
  update: (...args: any) => Promise<any>;
}

function NextCrud() {
  /**
   * Extract model and key from URL fragment
   *
   * @param context
   * @returns
   */
  async function fromContext(
    request: Request,
    context: HTTPContext
  ): Promise<ResourceContext> {
    const { params } = context;
    const data = await request.body;
    return {
      model: params.context[0],
      id: params.context[1],
      method: request.method,
      data,
    };
  }

  function getModel(model: string): PrismaQuery {
    return (prisma as any)[model];
  }
  /**
   * Get resources
   *
   * @param context
   * @returns
   */
  async function fetchResources(context: ResourceContext) {
    const { id, model } = context;
    if (id) {
      return await getModel(model).findUnique({
        where: { id: context.id },
      });
    }

    return await getModel(model).findMany();
  }

  /**
   * TODO: check data policy base on current user session or append filter scope
   * @returns should return resource or throw 403 forbidden
   */
  function checkDataPolicy() {}

  /**
   * handle get request
   *
   * @param context
   * @returns
   */
  async function handleGet(context: ResourceContext) {
    const resource = await fetchResources(context);
    return NextResponse.json({ data: resource });
  }

  /**
   * handle delete request
   *
   * @param context
   * @returns
   */
  async function handleDelete(context: ResourceContext) {
    const { id, model } = context;
    const resource = await getModel(model).delete({
      where: { id },
    });
    return NextResponse.json({ data: resource });
  }

  /**
   * handle post request
   *
   * @param context
   * @returns
   */
  async function handlePost(context: ResourceContext) {
    const { id, model, data } = context;
    const resource = await getModel(model).create({ data });
    return NextResponse.json({ data: resource });
  }

  /**
   * handle put or patch request
   *
   * @param context
   * @returns
   */
  async function handleUpdate(context: ResourceContext) {
    const { id, model, data } = context;
    const resource = await getModel(model).update({
      where: {
        id,
      },
      data,
    });
    return NextResponse.json({ data: resource });
  }

  return async function handle(request: Request, context: HTTPContext) {
    const resourceContext = await fromContext(request, context);

    switch (resourceContext.method) {
      case "GET":
        return await handleGet(resourceContext);
      case "POST":
        return await handlePost(resourceContext);
      case "PUT":
      case "PATCH":
        return await handleUpdate(resourceContext);
      case "DELETE":
        return await handleDelete(resourceContext);
    }
  };
}

const handler = NextCrud();
export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as PATCH,
  handler as DELETE,
};
