import { z } from 'zod';
import { UserHasRoleCreateWithoutRoleInputObjectSchema } from './UserHasRoleCreateWithoutRoleInput.schema';
import { UserHasRoleUncheckedCreateWithoutRoleInputObjectSchema } from './UserHasRoleUncheckedCreateWithoutRoleInput.schema';
import { UserHasRoleCreateOrConnectWithoutRoleInputObjectSchema } from './UserHasRoleCreateOrConnectWithoutRoleInput.schema';
import { UserHasRoleUpsertWithWhereUniqueWithoutRoleInputObjectSchema } from './UserHasRoleUpsertWithWhereUniqueWithoutRoleInput.schema';
import { UserHasRoleWhereUniqueInputObjectSchema } from './UserHasRoleWhereUniqueInput.schema';
import { UserHasRoleUpdateWithWhereUniqueWithoutRoleInputObjectSchema } from './UserHasRoleUpdateWithWhereUniqueWithoutRoleInput.schema';
import { UserHasRoleUpdateManyWithWhereWithoutRoleInputObjectSchema } from './UserHasRoleUpdateManyWithWhereWithoutRoleInput.schema';
import { UserHasRoleScalarWhereInputObjectSchema } from './UserHasRoleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleUncheckedUpdateManyWithoutRoleNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () => UserHasRoleUpsertWithWhereUniqueWithoutRoleInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserHasRoleUpsertWithWhereUniqueWithoutRoleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => UserHasRoleWhereUniqueInputObjectSchema),
          z.lazy(() => UserHasRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => UserHasRoleWhereUniqueInputObjectSchema),
          z.lazy(() => UserHasRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => UserHasRoleWhereUniqueInputObjectSchema),
          z.lazy(() => UserHasRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => UserHasRoleWhereUniqueInputObjectSchema),
          z.lazy(() => UserHasRoleWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () => UserHasRoleUpdateWithWhereUniqueWithoutRoleInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                UserHasRoleUpdateWithWhereUniqueWithoutRoleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () => UserHasRoleUpdateManyWithWhereWithoutRoleInputObjectSchema,
          ),
          z
            .lazy(
              () => UserHasRoleUpdateManyWithWhereWithoutRoleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => UserHasRoleScalarWhereInputObjectSchema),
          z.lazy(() => UserHasRoleScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const UserHasRoleUncheckedUpdateManyWithoutRoleNestedInputObjectSchema =
  Schema;
