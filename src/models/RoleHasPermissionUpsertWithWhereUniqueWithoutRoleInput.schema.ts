import { z } from 'zod';
import { RoleHasPermissionWhereUniqueInputObjectSchema } from './RoleHasPermissionWhereUniqueInput.schema';
import { RoleHasPermissionUpdateWithoutRoleInputObjectSchema } from './RoleHasPermissionUpdateWithoutRoleInput.schema';
import { RoleHasPermissionUncheckedUpdateWithoutRoleInputObjectSchema } from './RoleHasPermissionUncheckedUpdateWithoutRoleInput.schema';
import { RoleHasPermissionCreateWithoutRoleInputObjectSchema } from './RoleHasPermissionCreateWithoutRoleInput.schema';
import { RoleHasPermissionUncheckedCreateWithoutRoleInputObjectSchema } from './RoleHasPermissionUncheckedCreateWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionUpsertWithWhereUniqueWithoutRoleInput> =
  z
    .object({
      where: z.lazy(() => RoleHasPermissionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RoleHasPermissionUpdateWithoutRoleInputObjectSchema),
        z.lazy(
          () => RoleHasPermissionUncheckedUpdateWithoutRoleInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => RoleHasPermissionCreateWithoutRoleInputObjectSchema),
        z.lazy(
          () => RoleHasPermissionUncheckedCreateWithoutRoleInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RoleHasPermissionUpsertWithWhereUniqueWithoutRoleInputObjectSchema =
  Schema;
