import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    action: z.literal(true).optional(),
    subject: z.literal(true).optional(),
  })
  .strict();

export const PermissionMinAggregateInputObjectSchema = Schema;
