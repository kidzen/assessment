import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserHasRoleCountOrderByAggregateInputObjectSchema } from './UserHasRoleCountOrderByAggregateInput.schema';
import { UserHasRoleMaxOrderByAggregateInputObjectSchema } from './UserHasRoleMaxOrderByAggregateInput.schema';
import { UserHasRoleMinOrderByAggregateInputObjectSchema } from './UserHasRoleMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    role_id: z.lazy(() => SortOrderSchema).optional(),
    user_id: z.lazy(() => SortOrderSchema).optional(),
    _count: z
      .lazy(() => UserHasRoleCountOrderByAggregateInputObjectSchema)
      .optional(),
    _max: z
      .lazy(() => UserHasRoleMaxOrderByAggregateInputObjectSchema)
      .optional(),
    _min: z
      .lazy(() => UserHasRoleMinOrderByAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserHasRoleOrderByWithAggregationInputObjectSchema = Schema;
