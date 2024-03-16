import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UploadCountOrderByAggregateInputObjectSchema } from './UploadCountOrderByAggregateInput.schema';
import { UploadAvgOrderByAggregateInputObjectSchema } from './UploadAvgOrderByAggregateInput.schema';
import { UploadMaxOrderByAggregateInputObjectSchema } from './UploadMaxOrderByAggregateInput.schema';
import { UploadMinOrderByAggregateInputObjectSchema } from './UploadMinOrderByAggregateInput.schema';
import { UploadSumOrderByAggregateInputObjectSchema } from './UploadSumOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    path: z.lazy(() => SortOrderSchema).optional(),
    type: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    mime_type: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    file_size: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    _count: z
      .lazy(() => UploadCountOrderByAggregateInputObjectSchema)
      .optional(),
    _avg: z.lazy(() => UploadAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => UploadMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => UploadMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => UploadSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict();

export const UploadOrderByWithAggregationInputObjectSchema = Schema;
