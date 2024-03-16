import { z } from 'zod';
import { UserHasRoleCreateNestedManyWithoutRoleInputObjectSchema } from './UserHasRoleCreateNestedManyWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateWithoutPermissionsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    users: z
      .lazy(() => UserHasRoleCreateNestedManyWithoutRoleInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleCreateWithoutPermissionsInputObjectSchema = Schema;
