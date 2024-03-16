import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ProductCountOrderByAggregateInputObjectSchema } from './ProductCountOrderByAggregateInput.schema';
import { ProductMaxOrderByAggregateInputObjectSchema } from './ProductMaxOrderByAggregateInput.schema';
import { ProductMinOrderByAggregateInputObjectSchema } from './ProductMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    image_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    supplier: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => ProductCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z.lazy(() => ProductMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => ProductMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const ProductOrderByWithAggregationInputObjectSchema = Schema;
