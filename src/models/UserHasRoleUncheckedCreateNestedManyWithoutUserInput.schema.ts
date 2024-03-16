import { z } from 'zod';
import { UserHasRoleCreateWithoutUserInputObjectSchema } from './UserHasRoleCreateWithoutUserInput.schema';
import { UserHasRoleUncheckedCreateWithoutUserInputObjectSchema } from './UserHasRoleUncheckedCreateWithoutUserInput.schema';
import { UserHasRoleCreateOrConnectWithoutUserInputObjectSchema } from './UserHasRoleCreateOrConnectWithoutUserInput.schema';
import { UserHasRoleWhereUniqueInputObjectSchema } from './UserHasRoleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleUncheckedCreateNestedManyWithoutUserInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserHasRoleCreateWithoutUserInputObjectSchema),
          z.lazy(() => UserHasRoleCreateWithoutUserInputObjectSchema).array(),
          z.lazy(() => UserHasRoleUncheckedCreateWithoutUserInputObjectSchema),
          z
            .lazy(() => UserHasRoleUncheckedCreateWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserHasRoleCreateOrConnectWithoutUserInputObjectSchema),
          z
            .lazy(() => UserHasRoleCreateOrConnectWithoutUserInputObjectSchema)
            .array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserHasRoleWhereUniqueInputObjectSchema),
          z.lazy(() => UserHasRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserHasRoleUncheckedCreateNestedManyWithoutUserInputObjectSchema =
  Schema;
