import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleUncheckedCreateWithoutRoleInput> = z
  .object({
    id: z.string().optional(),
    user_id: z.string(),
  })
  .strict();

export const UserHasRoleUncheckedCreateWithoutRoleInputObjectSchema = Schema;
