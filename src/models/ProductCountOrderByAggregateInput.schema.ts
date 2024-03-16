import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    image_id: z.lazy(() => SortOrderSchema).optional(),
    supplier: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const ProductCountOrderByAggregateInputObjectSchema = Schema;
