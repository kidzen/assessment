import { z } from 'zod';
import { RoleHasPermissionRole_idPermission_idCompoundUniqueInputObjectSchema } from './RoleHasPermissionRole_idPermission_idCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    role_id_permission_id: z
      .lazy(
        () =>
          RoleHasPermissionRole_idPermission_idCompoundUniqueInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RoleHasPermissionWhereUniqueInputObjectSchema = Schema;
