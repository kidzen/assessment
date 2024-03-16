import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    role_id: z.literal(true).optional(),
    permission_id: z.literal(true).optional(),
  })
  .strict();

export const RoleHasPermissionMinAggregateInputObjectSchema = Schema;
