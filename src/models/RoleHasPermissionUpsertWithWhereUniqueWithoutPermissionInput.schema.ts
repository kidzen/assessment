import { z } from 'zod';
import { RoleHasPermissionWhereUniqueInputObjectSchema } from './RoleHasPermissionWhereUniqueInput.schema';
import { RoleHasPermissionUpdateWithoutPermissionInputObjectSchema } from './RoleHasPermissionUpdateWithoutPermissionInput.schema';
import { RoleHasPermissionUncheckedUpdateWithoutPermissionInputObjectSchema } from './RoleHasPermissionUncheckedUpdateWithoutPermissionInput.schema';
import { RoleHasPermissionCreateWithoutPermissionInputObjectSchema } from './RoleHasPermissionCreateWithoutPermissionInput.schema';
import { RoleHasPermissionUncheckedCreateWithoutPermissionInputObjectSchema } from './RoleHasPermissionUncheckedCreateWithoutPermissionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionUpsertWithWhereUniqueWithoutPermissionInput> =
  z
    .object({
      where: z.lazy(() => RoleHasPermissionWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => RoleHasPermissionUpdateWithoutPermissionInputObjectSchema),
        z.lazy(
          () =>
            RoleHasPermissionUncheckedUpdateWithoutPermissionInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => RoleHasPermissionCreateWithoutPermissionInputObjectSchema),
        z.lazy(
          () =>
            RoleHasPermissionUncheckedCreateWithoutPermissionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RoleHasPermissionUpsertWithWhereUniqueWithoutPermissionInputObjectSchema =
  Schema;
