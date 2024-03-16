import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    action: z.literal(true).optional(),
    subject: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict();

export const PermissionCountAggregateInputObjectSchema = Schema;
