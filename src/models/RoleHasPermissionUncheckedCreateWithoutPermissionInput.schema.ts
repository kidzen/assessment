import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionUncheckedCreateWithoutPermissionInput> =
  z
    .object({
      id: z.string().optional(),
      role_id: z.string(),
    })
    .strict();

export const RoleHasPermissionUncheckedCreateWithoutPermissionInputObjectSchema =
  Schema;
