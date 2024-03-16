import { z } from 'zod';
import { RoleHasPermissionScalarWhereInputObjectSchema } from './RoleHasPermissionScalarWhereInput.schema';
import { RoleHasPermissionUpdateManyMutationInputObjectSchema } from './RoleHasPermissionUpdateManyMutationInput.schema';
import { RoleHasPermissionUncheckedUpdateManyWithoutRolesInputObjectSchema } from './RoleHasPermissionUncheckedUpdateManyWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionUpdateManyWithWhereWithoutPermissionInput> =
  z
    .object({
      where: z.lazy(() => RoleHasPermissionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => RoleHasPermissionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            RoleHasPermissionUncheckedUpdateManyWithoutRolesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const RoleHasPermissionUpdateManyWithWhereWithoutPermissionInputObjectSchema =
  Schema;
