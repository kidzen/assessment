import { z } from 'zod';
import { UserHasRoleSelectObjectSchema } from './UserHasRoleSelect.schema';
import { UserHasRoleIncludeObjectSchema } from './UserHasRoleInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleArgs> = z
  .object({
    select: z.lazy(() => UserHasRoleSelectObjectSchema).optional(),
    include: z.lazy(() => UserHasRoleIncludeObjectSchema).optional(),
  })
  .strict();

export const UserHasRoleArgsObjectSchema = Schema;
