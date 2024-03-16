import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => RoleHasPermissionScalarWhereInputObjectSchema),
        z.lazy(() => RoleHasPermissionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => RoleHasPermissionScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => RoleHasPermissionScalarWhereInputObjectSchema),
        z.lazy(() => RoleHasPermissionScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const RoleHasPermissionScalarWhereInputObjectSchema = Schema;
