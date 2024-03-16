import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionRole_idPermission_idCompoundUniqueInput> =
  z
    .object({
      role_id: z.string(),
      permission_id: z.string(),
    })
    .strict();

export const RoleHasPermissionRole_idPermission_idCompoundUniqueInputObjectSchema =
  Schema;
