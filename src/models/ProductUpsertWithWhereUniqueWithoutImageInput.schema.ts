import { z } from 'zod';
import { ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutImageInputObjectSchema } from './ProductUpdateWithoutImageInput.schema';
import { ProductUncheckedUpdateWithoutImageInputObjectSchema } from './ProductUncheckedUpdateWithoutImageInput.schema';
import { ProductCreateWithoutImageInputObjectSchema } from './ProductCreateWithoutImageInput.schema';
import { ProductUncheckedCreateWithoutImageInputObjectSchema } from './ProductUncheckedCreateWithoutImageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUpsertWithWhereUniqueWithoutImageInput> =
  z
    .object({
      where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => ProductUpdateWithoutImageInputObjectSchema),
        z.lazy(() => ProductUncheckedUpdateWithoutImageInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => ProductCreateWithoutImageInputObjectSchema),
        z.lazy(() => ProductUncheckedCreateWithoutImageInputObjectSchema),
      ]),
    })
    .strict();

export const ProductUpsertWithWhereUniqueWithoutImageInputObjectSchema = Schema;
