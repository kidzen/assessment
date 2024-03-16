import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    action: z.lazy(() => SortOrderSchema).optional(),
    subject: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const PermissionCountOrderByAggregateInputObjectSchema = Schema;
