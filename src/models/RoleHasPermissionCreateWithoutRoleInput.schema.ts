import { z } from 'zod';
import { PermissionCreateNestedOneWithoutRolesInputObjectSchema } from './PermissionCreateNestedOneWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionCreateWithoutRoleInput> = z
  .object({
    id: z.string().optional(),
    permission: z.lazy(
      () => PermissionCreateNestedOneWithoutRolesInputObjectSchema,
    ),
  })
  .strict();

export const RoleHasPermissionCreateWithoutRoleInputObjectSchema = Schema;
