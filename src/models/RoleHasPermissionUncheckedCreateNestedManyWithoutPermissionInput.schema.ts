import { z } from 'zod';
import { RoleHasPermissionCreateWithoutPermissionInputObjectSchema } from './RoleHasPermissionCreateWithoutPermissionInput.schema';
import { RoleHasPermissionUncheckedCreateWithoutPermissionInputObjectSchema } from './RoleHasPermissionUncheckedCreateWithoutPermissionInput.schema';
import { RoleHasPermissionCreateOrConnectWithoutPermissionInputObjectSchema } from './RoleHasPermissionCreateOrConnectWithoutPermissionInput.schema';
import { RoleHasPermissionWhereUniqueInputObjectSchema } from './RoleHasPermissionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionUncheckedCreateNestedManyWithoutPermissionInput> =
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
      connect: z
        .union([
          z.lazy(() => RoleHasPermissionWhereUniqueInputObjectSchema),
          z.lazy(() => RoleHasPermissionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RoleHasPermissionUncheckedCreateNestedManyWithoutPermissionInputObjectSchema =
  Schema;
