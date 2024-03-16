import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserHasRoleUncheckedUpdateManyWithoutRoleNestedInputObjectSchema } from './UserHasRoleUncheckedUpdateManyWithoutRoleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUncheckedUpdateWithoutPermissionsInput> = z
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
    users: z
      .lazy(
        () => UserHasRoleUncheckedUpdateManyWithoutRoleNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RoleUncheckedUpdateWithoutPermissionsInputObjectSchema = Schema;
