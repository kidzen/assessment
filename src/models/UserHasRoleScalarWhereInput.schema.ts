import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserHasRoleScalarWhereInputObjectSchema),
        z.lazy(() => UserHasRoleScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserHasRoleScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserHasRoleScalarWhereInputObjectSchema),
        z.lazy(() => UserHasRoleScalarWhereInputObjectSchema).array(),
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
  })
  .strict();

export const UserHasRoleScalarWhereInputObjectSchema = Schema;
