import { z } from 'zod';
import { ProductCreateWithoutImageInputObjectSchema } from './ProductCreateWithoutImageInput.schema';
import { ProductUncheckedCreateWithoutImageInputObjectSchema } from './ProductUncheckedCreateWithoutImageInput.schema';
import { ProductCreateOrConnectWithoutImageInputObjectSchema } from './ProductCreateOrConnectWithoutImageInput.schema';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateNestedManyWithoutImageInput> = z
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
    connect: z
      .union([
        z.lazy(() => ProductWhereUniqueInputObjectSchema),
        z.lazy(() => ProductWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict();

export const ProductCreateNestedManyWithoutImageInputObjectSchema = Schema;
