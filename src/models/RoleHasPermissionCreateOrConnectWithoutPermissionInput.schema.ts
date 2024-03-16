import { z } from 'zod';
import { RoleHasPermissionWhereUniqueInputObjectSchema } from './RoleHasPermissionWhereUniqueInput.schema';
import { RoleHasPermissionCreateWithoutPermissionInputObjectSchema } from './RoleHasPermissionCreateWithoutPermissionInput.schema';
import { RoleHasPermissionUncheckedCreateWithoutPermissionInputObjectSchema } from './RoleHasPermissionUncheckedCreateWithoutPermissionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionCreateOrConnectWithoutPermissionInput> =
  z
    .object({
      where: z.lazy(() => RoleHasPermissionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => RoleHasPermissionCreateWithoutPermissionInputObjectSchema),
        z.lazy(
          () =>
            RoleHasPermissionUncheckedCreateWithoutPermissionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RoleHasPermissionCreateOrConnectWithoutPermissionInputObjectSchema =
  Schema;
