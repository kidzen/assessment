import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleHasPermissionUncheckedUpdateManyWithoutRoleNestedInputObjectSchema } from './RoleHasPermissionUncheckedUpdateManyWithoutRoleNestedInput.schema';
import { UserHasRoleUncheckedUpdateManyWithoutRoleNestedInputObjectSchema } from './UserHasRoleUncheckedUpdateManyWithoutRoleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedUpdateInput> = z
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
      .lazy(
        () =>
          RoleHasPermissionUncheckedUpdateManyWithoutRoleNestedInputObjectSchema,
      )
      .optional(),
    users: z
      .lazy(
        () => UserHasRoleUncheckedUpdateManyWithoutRoleNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RoleUncheckedUpdateInputObjectSchema = Schema;
