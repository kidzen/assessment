import { z } from 'zod';
import { UserHasRoleScalarWhereInputObjectSchema } from './UserHasRoleScalarWhereInput.schema';
import { UserHasRoleUpdateManyMutationInputObjectSchema } from './UserHasRoleUpdateManyMutationInput.schema';
import { UserHasRoleUncheckedUpdateManyWithoutRolesInputObjectSchema } from './UserHasRoleUncheckedUpdateManyWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleUpdateManyWithWhereWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => UserHasRoleScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => UserHasRoleUpdateManyMutationInputObjectSchema),
        z.lazy(
          () => UserHasRoleUncheckedUpdateManyWithoutRolesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const UserHasRoleUpdateManyWithWhereWithoutUserInputObjectSchema =
  Schema;
