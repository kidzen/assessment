import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCountOutputTypeSelect> = z
  .object({
    permissions: z.boolean().optional(),
    users: z.boolean().optional(),
  })
  .strict();

export const RoleCountOutputTypeSelectObjectSchema = Schema;
