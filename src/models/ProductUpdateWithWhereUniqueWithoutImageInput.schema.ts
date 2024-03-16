import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutImageInputObjectSchema } from './ProductUpdateWithoutImageInput.schema';
import { ProductUncheckedUpdateWithoutImageInputObjectSchema } from './ProductUncheckedUpdateWithoutImageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpdateWithWhereUniqueWithoutImageInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => ProductUpdateWithoutImageInputObjectSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutImageInputObjectSchema),
      ]),
    })
    .strict();

export const ProductUpdateWithWhereUniqueWithoutImageInputObjectSchema = Schema;
