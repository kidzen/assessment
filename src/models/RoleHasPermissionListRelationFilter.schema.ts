import { z } from 'zod';
import { RoleHasPermissionWhereInputObjectSchema } from './RoleHasPermissionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionListRelationFilter> = z
  .object({
    every: z.lazy(() => RoleHasPermissionWhereInputObjectSchema).optional(),
    some: z.lazy(() => RoleHasPermissionWhereInputObjectSchema).optional(),
    none: z.lazy(() => RoleHasPermissionWhereInputObjectSchema).optional(),
  })
  .strict();

export const RoleHasPermissionListRelationFilterObjectSchema = Schema;
