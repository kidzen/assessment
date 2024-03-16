import { z } from 'zod';
import { ProductCreateWithoutImageInputObjectSchema } from './ProductCreateWithoutImageInput.schema';
import { ProductUncheckedCreateWithoutImageInputObjectSchema } from './ProductUncheckedCreateWithoutImageInput.schema';
import { ProductCreateOrConnectWithoutImageInputObjectSchema } from './ProductCreateOrConnectWithoutImageInput.schema';
import { ProductUpsertWithWhereUniqueWithoutImageInputObjectSchema } from './ProductUpsertWithWhereUniqueWithoutImageInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithWhereUniqueWithoutImageInputObjectSchema } from './ProductUpdateWithWhereUniqueWithoutImageInput.schema';
import { ProductUpdateManyWithWhereWithoutImageInputObjectSchema } from './ProductUpdateManyWithWhereWithoutImageInput.schema';
import { ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateManyWithoutImageNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => ProductCreateWithoutImageInputObjectSchema),
        z.lazy(() => ProductCreateWithoutImageInputObjectSchema).array(),
        z.lazy(() => ProductUncheckedCreateWithoutImageInputObjectSchema),
        z
          .lazy(() => ProductUncheckedCreateWithoutImageInputObjectSchema)
          .array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => ProductCreateOrConnectWithoutImageInputObjectSchema),
        z
          .lazy(() => ProductCreateOrConnectWithoutImageInputObjectSchema)
          .array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => ProductUpsertWithWhereUniqueWithoutImageInputObjectSchema),
        z
          .lazy(() => ProductUpsertWithWhereUniqueWithoutImageInputObjectSchema)
          .array(),
      ])
      .optional(),
    set: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => ProductUpdateWithWhereUniqueWithoutImageInputObjectSchema),
        z
          .lazy(() => ProductUpdateWithWhereUniqueWithoutImageInputObjectSchema)
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => ProductUpdateManyWithWhereWithoutImageInputObjectSchema),
        z
          .lazy(() => ProductUpdateManyWithWhereWithoutImageInputObjectSchema)
          .array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => ProductScalarWhereInputObjectSchema),
        z.lazy(() => ProductScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ProductUpdateManyWithoutImageNestedInputObjectSchema = Schema;
