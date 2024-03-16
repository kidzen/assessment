import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    image_id: z.string().optional().nullable(),
    supplier: z.string(),
  })
  .strict();

export const ProductUncheckedCreateInputObjectSchema = Schema;
