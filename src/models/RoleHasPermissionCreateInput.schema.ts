import { z } from 'zod';
import { RoleCreateNestedOneWithoutPermissionsInputObjectSchema } from './RoleCreateNestedOneWithoutPermissionsInput.schema';
import { PermissionCreateNestedOneWithoutRolesInputObjectSchema } from './PermissionCreateNestedOneWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionCreateInput> = z
  .object({
    id: z.string().optional(),
    role: z.lazy(() => RoleCreateNestedOneWithoutPermissionsInputObjectSchema),
    permission: z.lazy(
      () => PermissionCreateNestedOneWithoutRolesInputObjectSchema,
    ),
  })
  .strict();

export const RoleHasPermissionCreateInputObjectSchema = Schema;
