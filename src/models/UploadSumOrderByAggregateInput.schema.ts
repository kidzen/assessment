import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadSumOrderByAggregateInput> = z
  .object({
    file_size: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const UploadSumOrderByAggregateInputObjectSchema = Schema;
