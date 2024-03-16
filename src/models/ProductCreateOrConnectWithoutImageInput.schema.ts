import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutImageInputObjectSchema } from './ProductCreateWithoutImageInput.schema';
import { ProductUncheckedCreateWithoutImageInputObjectSchema } from './ProductUncheckedCreateWithoutImageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateOrConnectWithoutImageInput> = z
  .object({
    where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => ProductCreateWithoutImageInputObjectSchema),
      z.lazy(() => ProductUncheckedCreateWithoutImageInputObjectSchema),
    ]),
  })
  .strict();

export const ProductCreateOrConnectWithoutImageInputObjectSchema = Schema;
