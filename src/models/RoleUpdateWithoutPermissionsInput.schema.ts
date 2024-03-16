import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserHasRoleUpdateManyWithoutRoleNestedInputObjectSchema } from './UserHasRoleUpdateManyWithoutRoleNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateWithoutPermissionsInput> = z
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
      .lazy(() => UserHasRoleUpdateManyWithoutRoleNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const RoleUpdateWithoutPermissionsInputObjectSchema = Schema;
