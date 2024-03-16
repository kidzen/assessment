import { z } from 'zod';
import { RoleHasPermissionCreateWithoutRoleInputObjectSchema } from './RoleHasPermissionCreateWithoutRoleInput.schema';
import { RoleHasPermissionUncheckedCreateWithoutRoleInputObjectSchema } from './RoleHasPermissionUncheckedCreateWithoutRoleInput.schema';
import { RoleHasPermissionCreateOrConnectWithoutRoleInputObjectSchema } from './RoleHasPermissionCreateOrConnectWithoutRoleInput.schema';
import { RoleHasPermissionUpsertWithWhereUniqueWithoutRoleInputObjectSchema } from './RoleHasPermissionUpsertWithWhereUniqueWithoutRoleInput.schema';
import { RoleHasPermissionWhereUniqueInputObjectSchema } from './RoleHasPermissionWhereUniqueInput.schema';
import { RoleHasPermissionUpdateWithWhereUniqueWithoutRoleInputObjectSchema } from './RoleHasPermissionUpdateWithWhereUniqueWithoutRoleInput.schema';
import { RoleHasPermissionUpdateManyWithWhereWithoutRoleInputObjectSchema } from './RoleHasPermissionUpdateManyWithWhereWithoutRoleInput.schema';
import { RoleHasPermissionScalarWhereInputObjectSchema } from './RoleHasPermissionScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionUpdateManyWithoutRoleNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => RoleHasPermissionCreateWithoutRoleInputObjectSchema),
          z
            .lazy(() => RoleHasPermissionCreateWithoutRoleInputObjectSchema)
            .array(),
          z.lazy(
            () => RoleHasPermissionUncheckedCreateWithoutRoleInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RoleHasPermissionUncheckedCreateWithoutRoleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => RoleHasPermissionCreateOrConnectWithoutRoleInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RoleHasPermissionCreateOrConnectWithoutRoleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      upsert: z
        .union([
          z.lazy(
            () =>
              RoleHasPermissionUpsertWithWhereUniqueWithoutRoleInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RoleHasPermissionUpsertWithWhereUniqueWithoutRoleInputObjectSchema,
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
              RoleHasPermissionUpdateWithWhereUniqueWithoutRoleInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RoleHasPermissionUpdateWithWhereUniqueWithoutRoleInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              RoleHasPermissionUpdateManyWithWhereWithoutRoleInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                RoleHasPermissionUpdateManyWithWhereWithoutRoleInputObjectSchema,
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

export const RoleHasPermissionUpdateManyWithoutRoleNestedInputObjectSchema =
  Schema;
