import { z } from 'zod';
import { RoleCreateNestedOneWithoutPermissionsInputObjectSchema } from './RoleCreateNestedOneWithoutPermissionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionCreateWithoutPermissionInput> =
  z
    .object({
      id: z.string().optional(),
      role: z.lazy(
        () => RoleCreateNestedOneWithoutPermissionsInputObjectSchema,
      ),
    })
    .strict();

export const RoleHasPermissionCreateWithoutPermissionInputObjectSchema = Schema;
