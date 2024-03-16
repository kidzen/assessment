import { z } from 'zod';
import { UserHasRoleUncheckedCreateNestedManyWithoutRoleInputObjectSchema } from './UserHasRoleUncheckedCreateNestedManyWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedCreateWithoutPermissionsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    users: z
      .lazy(
        () => UserHasRoleUncheckedCreateNestedManyWithoutRoleInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RoleUncheckedCreateWithoutPermissionsInputObjectSchema = Schema;
