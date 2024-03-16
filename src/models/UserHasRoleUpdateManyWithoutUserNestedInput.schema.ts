import { z } from 'zod';
import { UserHasRoleCreateWithoutUserInputObjectSchema } from './UserHasRoleCreateWithoutUserInput.schema';
import { UserHasRoleUncheckedCreateWithoutUserInputObjectSchema } from './UserHasRoleUncheckedCreateWithoutUserInput.schema';
import { UserHasRoleCreateOrConnectWithoutUserInputObjectSchema } from './UserHasRoleCreateOrConnectWithoutUserInput.schema';
import { UserHasRoleUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './UserHasRoleUpsertWithWhereUniqueWithoutUserInput.schema';
import { UserHasRoleWhereUniqueInputObjectSchema } from './UserHasRoleWhereUniqueInput.schema';
import { UserHasRoleUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './UserHasRoleUpdateWithWhereUniqueWithoutUserInput.schema';
import { UserHasRoleUpdateManyWithWhereWithoutUserInputObjectSchema } from './UserHasRoleUpdateManyWithWhereWithoutUserInput.schema';
import { UserHasRoleScalarWhereInputObjectSchema } from './UserHasRoleScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleUpdateManyWithoutUserNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(
          () => UserHasRoleUpsertWithWhereUniqueWithoutUserInputObjectSchema,
        ),
        z
          .lazy(
            () => UserHasRoleUpsertWithWhereUniqueWithoutUserInputObjectSchema,
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
          () => UserHasRoleUpdateWithWhereUniqueWithoutUserInputObjectSchema,
        ),
        z
          .lazy(
            () => UserHasRoleUpdateWithWhereUniqueWithoutUserInputObjectSchema,
          )
          .array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(
          () => UserHasRoleUpdateManyWithWhereWithoutUserInputObjectSchema,
        ),
        z
          .lazy(
            () => UserHasRoleUpdateManyWithWhereWithoutUserInputObjectSchema,
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

export const UserHasRoleUpdateManyWithoutUserNestedInputObjectSchema = Schema;
