import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionCreateWithoutRolesInput> = z
  .object({
    id: z.string().optional(),
    action: z.string(),
    subject: z.string(),
  })
  .strict();

export const PermissionCreateWithoutRolesInputObjectSchema = Schema;
