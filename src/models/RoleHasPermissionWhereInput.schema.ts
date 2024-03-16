import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { RoleRelationFilterObjectSchema } from './RoleRelationFilter.schema';
import { RoleWhereInputObjectSchema } from './RoleWhereInput.schema';
import { PermissionRelationFilterObjectSchema } from './PermissionRelationFilter.schema';
import { PermissionWhereInputObjectSchema } from './PermissionWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RoleHasPermissionWhereInputObjectSchema),
        z.lazy(() => RoleHasPermissionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoleHasPermissionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoleHasPermissionWhereInputObjectSchema),
        z.lazy(() => RoleHasPermissionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    role_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    permission_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    role: z
      .union([
        z.lazy(() => RoleRelationFilterObjectSchema),
        z.lazy(() => RoleWhereInputObjectSchema),
      ])
      .optional(),
    permission: z
      .union([
        z.lazy(() => PermissionRelationFilterObjectSchema),
        z.lazy(() => PermissionWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const RoleHasPermissionWhereInputObjectSchema = Schema;
