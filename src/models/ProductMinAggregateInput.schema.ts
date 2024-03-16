import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    image_id: z.literal(true).optional(),
    supplier: z.literal(true).optional(),
  })
  .strict();

export const ProductMinAggregateInputObjectSchema = Schema;
