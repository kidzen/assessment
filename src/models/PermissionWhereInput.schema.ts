import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { RoleHasPermissionListRelationFilterObjectSchema } from './RoleHasPermissionListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PermissionWhereInputObjectSchema),
        z.lazy(() => PermissionWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PermissionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PermissionWhereInputObjectSchema),
        z.lazy(() => PermissionWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    action: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    subject: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    roles: z
      .lazy(() => RoleHasPermissionListRelationFilterObjectSchema)
      .optional(),
  })
  .strict();

export const PermissionWhereInputObjectSchema = Schema;
