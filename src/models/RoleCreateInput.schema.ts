import { z } from 'zod';
import { RoleHasPermissionCreateNestedManyWithoutRoleInputObjectSchema } from './RoleHasPermissionCreateNestedManyWithoutRoleInput.schema';
import { UserHasRoleCreateNestedManyWithoutRoleInputObjectSchema } from './UserHasRoleCreateNestedManyWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    permissions: z
      .lazy(() => RoleHasPermissionCreateNestedManyWithoutRoleInputObjectSchema)
      .optional(),
    users: z
      .lazy(() => UserHasRoleCreateNestedManyWithoutRoleInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleCreateInputObjectSchema = Schema;
