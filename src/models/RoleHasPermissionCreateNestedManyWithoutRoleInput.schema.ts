import { z } from 'zod';
import { RoleHasPermissionCreateWithoutRoleInputObjectSchema } from './RoleHasPermissionCreateWithoutRoleInput.schema';
import { RoleHasPermissionUncheckedCreateWithoutRoleInputObjectSchema } from './RoleHasPermissionUncheckedCreateWithoutRoleInput.schema';
import { RoleHasPermissionCreateOrConnectWithoutRoleInputObjectSchema } from './RoleHasPermissionCreateOrConnectWithoutRoleInput.schema';
import { RoleHasPermissionWhereUniqueInputObjectSchema } from './RoleHasPermissionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionCreateNestedManyWithoutRoleInput> =
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
      connect: z
        .union([
          z.lazy(() => RoleHasPermissionWhereUniqueInputObjectSchema),
          z.lazy(() => RoleHasPermissionWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const RoleHasPermissionCreateNestedManyWithoutRoleInputObjectSchema =
  Schema;
