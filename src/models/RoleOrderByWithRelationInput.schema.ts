import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoleHasPermissionOrderByRelationAggregateInputObjectSchema } from './RoleHasPermissionOrderByRelationAggregateInput.schema';
import { UserHasRoleOrderByRelationAggregateInputObjectSchema } from './UserHasRoleOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    permissions: z
      .lazy(() => RoleHasPermissionOrderByRelationAggregateInputObjectSchema)
      .optional(),
    users: z
      .lazy(() => UserHasRoleOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleOrderByWithRelationInputObjectSchema = Schema;
