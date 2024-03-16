import { z } from 'zod';
import { RoleHasPermissionCreateWithoutPermissionInputObjectSchema } from './RoleHasPermissionCreateWithoutPermissionInput.schema';
import { RoleHasPermissionUncheckedCreateWithoutPermissionInputObjectSchema } from './RoleHasPermissionUncheckedCreateWithoutPermissionInput.schema';
import { RoleHasPermissionCreateOrConnectWithoutPermissionInputObjectSchema } from './RoleHasPermissionCreateOrConnectWithoutPermissionInput.schema';
import { RoleHasPermissionUpsertWithWhereUniqueWithoutPermissionInputObjectSchema } from './RoleHasPermissionUpsertWithWhereUniqueWithoutPermissionInput.schema';
import { RoleHasPermissionWhereUniqueInputObjectSchema } from './RoleHasPermissionWhereUniqueInput.schema';
import { RoleHasPermissionUpdateWithWhereUniqueWithoutPermissionInputObjectSchema } from './RoleHasPermissionUpdateWithWhereUniqueWithoutPermissionInput.schema';
import { RoleHasPermissionUpdateManyWithWhereWithoutPermissionInputObjectSchema } from './RoleHasPermissionUpdateManyWithWhereWithoutPermissionInput.schema';
import { RoleHasPermissionScalarWhereInputObjectSchema } from './RoleHasPermissionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionUpdateManyWithoutPermissionNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => RoleHasPermissionCreateWithoutPermissionInputObjectSchema,
          ),
          z
            .lazy(
              () => RoleHasPermissionCreateWithoutPermissionInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              RoleHasPermissionUncheckedCreateWithoutPermissionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RoleHasPermissionUncheckedCreateWithoutPermissionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              RoleHasPermissionCreateOrConnectWithoutPermissionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RoleHasPermissionCreateOrConnectWithoutPermissionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              RoleHasPermissionUpsertWithWhereUniqueWithoutPermissionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RoleHasPermissionUpsertWithWhereUniqueWithoutPermissionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      set: z
        .union([
          z.lazy(() => RoleHasPermissionWhereUniqueInputObjectSchema),
          z.lazy(() => RoleHasPermissionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => RoleHasPermissionWhereUniqueInputObjectSchema),
          z.lazy(() => RoleHasPermissionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => RoleHasPermissionWhereUniqueInputObjectSchema),
          z.lazy(() => RoleHasPermissionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => RoleHasPermissionWhereUniqueInputObjectSchema),
          z.lazy(() => RoleHasPermissionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              RoleHasPermissionUpdateWithWhereUniqueWithoutPermissionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RoleHasPermissionUpdateWithWhereUniqueWithoutPermissionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              RoleHasPermissionUpdateManyWithWhereWithoutPermissionInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RoleHasPermissionUpdateManyWithWhereWithoutPermissionInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => RoleHasPermissionScalarWhereInputObjectSchema),
          z.lazy(() => RoleHasPermissionScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RoleHasPermissionUpdateManyWithoutPermissionNestedInputObjectSchema =
  Schema;
