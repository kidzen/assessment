import { z } from 'zod';
import { UserHasRoleCreateWithoutRoleInputObjectSchema } from './UserHasRoleCreateWithoutRoleInput.schema';
import { UserHasRoleUncheckedCreateWithoutRoleInputObjectSchema } from './UserHasRoleUncheckedCreateWithoutRoleInput.schema';
import { UserHasRoleCreateOrConnectWithoutRoleInputObjectSchema } from './UserHasRoleCreateOrConnectWithoutRoleInput.schema';
import { UserHasRoleWhereUniqueInputObjectSchema } from './UserHasRoleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleUncheckedCreateNestedManyWithoutRoleInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserHasRoleCreateWithoutRoleInputObjectSchema),
          z.lazy(() => UserHasRoleCreateWithoutRoleInputObjectSchema).array(),
          z.lazy(() => UserHasRoleUncheckedCreateWithoutRoleInputObjectSchema),
          z
            .lazy(() => UserHasRoleUncheckedCreateWithoutRoleInputObjectSchema)
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(() => UserHasRoleCreateOrConnectWithoutRoleInputObjectSchema),
          z
            .lazy(() => UserHasRoleCreateOrConnectWithoutRoleInputObjectSchema)
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

export const UserHasRoleUncheckedCreateNestedManyWithoutRoleInputObjectSchema =
  Schema;
