import { z } from 'zod';
import { RoleHasPermissionWhereUniqueInputObjectSchema } from './RoleHasPermissionWhereUniqueInput.schema';
import { RoleHasPermissionUpdateWithoutPermissionInputObjectSchema } from './RoleHasPermissionUpdateWithoutPermissionInput.schema';
import { RoleHasPermissionUncheckedUpdateWithoutPermissionInputObjectSchema } from './RoleHasPermissionUncheckedUpdateWithoutPermissionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionUpdateWithWhereUniqueWithoutPermissionInput> =
  z
    .object({
      where: z.lazy(() => RoleHasPermissionWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => RoleHasPermissionUpdateWithoutPermissionInputObjectSchema),
        z.lazy(
          () =>
            RoleHasPermissionUncheckedUpdateWithoutPermissionInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RoleHasPermissionUpdateWithWhereUniqueWithoutPermissionInputObjectSchema =
  Schema;
