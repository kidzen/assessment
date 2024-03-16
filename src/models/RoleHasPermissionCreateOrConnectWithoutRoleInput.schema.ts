import { z } from 'zod';
import { RoleHasPermissionWhereUniqueInputObjectSchema } from './RoleHasPermissionWhereUniqueInput.schema';
import { RoleHasPermissionCreateWithoutRoleInputObjectSchema } from './RoleHasPermissionCreateWithoutRoleInput.schema';
import { RoleHasPermissionUncheckedCreateWithoutRoleInputObjectSchema } from './RoleHasPermissionUncheckedCreateWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionCreateOrConnectWithoutRoleInput> =
  z
    .object({
      where: z.lazy(() => RoleHasPermissionWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => RoleHasPermissionCreateWithoutRoleInputObjectSchema),
        z.lazy(
          () => RoleHasPermissionUncheckedCreateWithoutRoleInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RoleHasPermissionCreateOrConnectWithoutRoleInputObjectSchema =
  Schema;
