import { z } from 'zod';
import { UserHasRoleScalarWhereInputObjectSchema } from './UserHasRoleScalarWhereInput.schema';
import { UserHasRoleUpdateManyMutationInputObjectSchema } from './UserHasRoleUpdateManyMutationInput.schema';
import { UserHasRoleUncheckedUpdateManyWithoutUsersInputObjectSchema } from './UserHasRoleUncheckedUpdateManyWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleUpdateManyWithWhereWithoutRoleInput> =
  z
    .object({
      where: z.lazy(() => UserHasRoleScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => UserHasRoleUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => UserHasRoleUncheckedUpdateManyWithoutUsersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserHasRoleUpdateManyWithWhereWithoutRoleInputObjectSchema =
  Schema;
