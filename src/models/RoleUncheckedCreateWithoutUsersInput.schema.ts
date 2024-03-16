import { z } from 'zod';
import { RoleHasPermissionUncheckedCreateNestedManyWithoutRoleInputObjectSchema } from './RoleHasPermissionUncheckedCreateNestedManyWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedCreateWithoutUsersInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    permissions: z
      .lazy(
        () =>
          RoleHasPermissionUncheckedCreateNestedManyWithoutRoleInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RoleUncheckedCreateWithoutUsersInputObjectSchema = Schema;
