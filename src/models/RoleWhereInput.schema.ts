import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { RoleHasPermissionListRelationFilterObjectSchema } from './RoleHasPermissionListRelationFilter.schema';
import { UserHasRoleListRelationFilterObjectSchema } from './UserHasRoleListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RoleWhereInputObjectSchema),
        z.lazy(() => RoleWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoleWhereInputObjectSchema),
        z.lazy(() => RoleWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    name: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    permissions: z
      .lazy(() => RoleHasPermissionListRelationFilterObjectSchema)
      .optional(),
    users: z.lazy(() => UserHasRoleListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const RoleWhereInputObjectSchema = Schema;
