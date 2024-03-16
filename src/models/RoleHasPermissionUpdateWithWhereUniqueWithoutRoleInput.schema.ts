import { z } from 'zod';
import { RoleHasPermissionWhereUniqueInputObjectSchema } from './RoleHasPermissionWhereUniqueInput.schema';
import { RoleHasPermissionUpdateWithoutRoleInputObjectSchema } from './RoleHasPermissionUpdateWithoutRoleInput.schema';
import { RoleHasPermissionUncheckedUpdateWithoutRoleInputObjectSchema } from './RoleHasPermissionUncheckedUpdateWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionUpdateWithWhereUniqueWithoutRoleInput> =
  z
    .object({
      where: z.lazy(() => RoleHasPermissionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RoleHasPermissionUpdateWithoutRoleInputObjectSchema),
        z.lazy(
          () => RoleHasPermissionUncheckedUpdateWithoutRoleInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RoleHasPermissionUpdateWithWhereUniqueWithoutRoleInputObjectSchema =
  Schema;
