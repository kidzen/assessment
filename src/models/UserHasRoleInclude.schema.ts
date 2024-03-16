import { z } from 'zod';
import { RoleArgsObjectSchema } from './RoleArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleInclude> = z
  .object({
    role: z.union([z.boolean(), z.lazy(() => RoleArgsObjectSchema)]).optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  })
  .strict();

export const UserHasRoleIncludeObjectSchema = Schema;
