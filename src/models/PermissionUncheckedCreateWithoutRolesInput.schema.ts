import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionUncheckedCreateWithoutRolesInput> = z
  .object({
    id: z.string().optional(),
    action: z.string(),
    subject: z.string(),
  })
  .strict();

export const PermissionUncheckedCreateWithoutRolesInputObjectSchema = Schema;
