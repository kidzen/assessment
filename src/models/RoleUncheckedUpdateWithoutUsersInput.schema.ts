import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleHasPermissionUncheckedUpdateManyWithoutRoleNestedInputObjectSchema } from './RoleHasPermissionUncheckedUpdateManyWithoutRoleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedUpdateWithoutUsersInput> = z
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
  })
  .strict();

export const RoleUncheckedUpdateWithoutUsersInputObjectSchema = Schema;
