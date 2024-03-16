import { z } from 'zod';
import { RoleHasPermissionCreateNestedManyWithoutRoleInputObjectSchema } from './RoleHasPermissionCreateNestedManyWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateWithoutUsersInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    permissions: z
      .lazy(() => RoleHasPermissionCreateNestedManyWithoutRoleInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleCreateWithoutUsersInputObjectSchema = Schema;
