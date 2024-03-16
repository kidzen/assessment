import { z } from 'zod';
import { RoleArgsObjectSchema } from './RoleArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleSelect> = z
  .object({
    id: z.boolean().optional(),
    role_id: z.boolean().optional(),
    user_id: z.boolean().optional(),
    role: z.union([z.boolean(), z.lazy(() => RoleArgsObjectSchema)]).optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  })
  .strict();

export const UserHasRoleSelectObjectSchema = Schema;
