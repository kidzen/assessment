import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    path: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    mime_type: z.lazy(() => SortOrderSchema).optional(),
    file_size: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UploadMaxOrderByAggregateInputObjectSchema = Schema;
