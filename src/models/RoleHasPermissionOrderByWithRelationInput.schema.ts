import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { RoleOrderByWithRelationInputObjectSchema } from './RoleOrderByWithRelationInput.schema';
import { PermissionOrderByWithRelationInputObjectSchema } from './PermissionOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    role_id: z.lazy(() => SortOrderSchema).optional(),
    permission_id: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => RoleOrderByWithRelationInputObjectSchema).optional(),
    permission: z
      .lazy(() => PermissionOrderByWithRelationInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleHasPermissionOrderByWithRelationInputObjectSchema = Schema;
