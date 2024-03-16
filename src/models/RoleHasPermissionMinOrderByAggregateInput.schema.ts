import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    role_id: z.lazy(() => SortOrderSchema).optional(),
    permission_id: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict();

export const RoleHasPermissionMinOrderByAggregateInputObjectSchema = Schema;
