import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    role_id: z.literal(true).optional(),
    user_id: z.literal(true).optional(),
  })
  .strict();

export const UserHasRoleMaxAggregateInputObjectSchema = Schema;
