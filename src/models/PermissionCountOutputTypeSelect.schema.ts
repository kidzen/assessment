import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionCountOutputTypeSelect> = z
  .object({
    roles: z.boolean().optional(),
  })
  .strict();

export const PermissionCountOutputTypeSelectObjectSchema = Schema;
