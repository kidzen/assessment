import { z } from 'zod';
import { RoleHasPermissionUncheckedCreateNestedManyWithoutRoleInputObjectSchema } from './RoleHasPermissionUncheckedCreateNestedManyWithoutRoleInput.schema';
import { UserHasRoleUncheckedCreateNestedManyWithoutRoleInputObjectSchema } from './UserHasRoleUncheckedCreateNestedManyWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    permissions: z
      .lazy(
        () =>
          RoleHasPermissionUncheckedCreateNestedManyWithoutRoleInputObjectSchema,
      )
      .optional(),
    users: z
      .lazy(
        () => UserHasRoleUncheckedCreateNestedManyWithoutRoleInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RoleUncheckedCreateInputObjectSchema = Schema;
