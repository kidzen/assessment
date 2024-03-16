import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { RoleRelationFilterObjectSchema } from './RoleRelationFilter.schema';
import { RoleWhereInputObjectSchema } from './RoleWhereInput.schema';
import { UserRelationFilterObjectSchema } from './UserRelationFilter.schema';
import { UserWhereInputObjectSchema } from './UserWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserHasRoleWhereInputObjectSchema),
        z.lazy(() => UserHasRoleWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserHasRoleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserHasRoleWhereInputObjectSchema),
        z.lazy(() => UserHasRoleWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    role_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    user_id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    role: z
      .union([
        z.lazy(() => RoleRelationFilterObjectSchema),
        z.lazy(() => RoleWhereInputObjectSchema),
      ])
      .optional(),
    user: z
      .union([
        z.lazy(() => UserRelationFilterObjectSchema),
        z.lazy(() => UserWhereInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserHasRoleWhereInputObjectSchema = Schema;
