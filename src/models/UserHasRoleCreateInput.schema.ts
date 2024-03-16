import { z } from 'zod';
import { RoleCreateNestedOneWithoutUsersInputObjectSchema } from './RoleCreateNestedOneWithoutUsersInput.schema';
import { UserCreateNestedOneWithoutRolesInputObjectSchema } from './UserCreateNestedOneWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleCreateInput> = z
  .object({
    id: z.string().optional(),
    role: z.lazy(() => RoleCreateNestedOneWithoutUsersInputObjectSchema),
    user: z.lazy(() => UserCreateNestedOneWithoutRolesInputObjectSchema),
  })
  .strict();

export const UserHasRoleCreateInputObjectSchema = Schema;
