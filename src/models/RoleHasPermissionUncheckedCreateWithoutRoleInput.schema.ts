import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionUncheckedCreateWithoutRoleInput> =
  z
    .object({
      id: z.string().optional(),
      permission_id: z.string(),
    })
    .strict();

export const RoleHasPermissionUncheckedCreateWithoutRoleInputObjectSchema =
  Schema;
