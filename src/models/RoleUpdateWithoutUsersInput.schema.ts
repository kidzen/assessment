import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleHasPermissionUpdateManyWithoutRoleNestedInputObjectSchema } from './RoleHasPermissionUpdateManyWithoutRoleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateWithoutUsersInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    name: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    permissions: z
      .lazy(() => RoleHasPermissionUpdateManyWithoutRoleNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleUpdateWithoutUsersInputObjectSchema = Schema;
