import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoleHasPermissionCountOrderByAggregateInputObjectSchema } from './RoleHasPermissionCountOrderByAggregateInput.schema';
import { RoleHasPermissionMaxOrderByAggregateInputObjectSchema } from './RoleHasPermissionMaxOrderByAggregateInput.schema';
import { RoleHasPermissionMinOrderByAggregateInputObjectSchema } from './RoleHasPermissionMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    role_id: z.lazy(() => SortOrderSchema).optional(),
    permission_id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => RoleHasPermissionCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => RoleHasPermissionMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => RoleHasPermissionMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleHasPermissionOrderByWithAggregationInputObjectSchema = Schema;
