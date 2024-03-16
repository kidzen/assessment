import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoleHasPermissionOrderByRelationAggregateInputObjectSchema } from './RoleHasPermissionOrderByRelationAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    action: z.lazy(() => SortOrderSchema).optional(),
    subject: z.lazy(() => SortOrderSchema).optional(),
    roles: z
      .lazy(() => RoleHasPermissionOrderByRelationAggregateInputObjectSchema)
      .optional(),
  })
  .strict();

export const PermissionOrderByWithRelationInputObjectSchema = Schema;
