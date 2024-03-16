import { z } from 'zod';
import { UserHasRoleWhereInputObjectSchema } from './UserHasRoleWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleListRelationFilter> = z
  .object({
    every: z.lazy(() => UserHasRoleWhereInputObjectSchema).optional(),
    some: z.lazy(() => UserHasRoleWhereInputObjectSchema).optional(),
    none: z.lazy(() => UserHasRoleWhereInputObjectSchema).optional(),
  })
  .strict();

export const UserHasRoleListRelationFilterObjectSchema = Schema;
