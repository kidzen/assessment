import { z } from 'zod';
import { RoleCreateNestedOneWithoutUsersInputObjectSchema } from './RoleCreateNestedOneWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    role: z.lazy(() => RoleCreateNestedOneWithoutUsersInputObjectSchema),
  })
  .strict();

export const UserHasRoleCreateWithoutUserInputObjectSchema = Schema;
