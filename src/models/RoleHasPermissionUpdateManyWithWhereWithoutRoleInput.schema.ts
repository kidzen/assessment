import { z } from 'zod';
import { RoleHasPermissionScalarWhereInputObjectSchema } from './RoleHasPermissionScalarWhereInput.schema';
import { RoleHasPermissionUpdateManyMutationInputObjectSchema } from './RoleHasPermissionUpdateManyMutationInput.schema';
import { RoleHasPermissionUncheckedUpdateManyWithoutPermissionsInputObjectSchema } from './RoleHasPermissionUncheckedUpdateManyWithoutPermissionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionUpdateManyWithWhereWithoutRoleInput> =
  z
    .object({
      where: z.lazy(() => RoleHasPermissionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => RoleHasPermissionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            RoleHasPermissionUncheckedUpdateManyWithoutPermissionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RoleHasPermissionUpdateManyWithWhereWithoutRoleInputObjectSchema =
  Schema;
