import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedCreateWithoutImageInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    supplier: z.string(),
  })
  .strict();

export const ProductUncheckedCreateWithoutImageInputObjectSchema = Schema;
