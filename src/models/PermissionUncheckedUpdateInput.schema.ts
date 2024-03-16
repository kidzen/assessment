import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleHasPermissionUncheckedUpdateManyWithoutPermissionNestedInputObjectSchema } from './RoleHasPermissionUncheckedUpdateManyWithoutPermissionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionUncheckedUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    action: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    subject: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    roles: z
      .lazy(
        () =>
          RoleHasPermissionUncheckedUpdateManyWithoutPermissionNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PermissionUncheckedUpdateInputObjectSchema = Schema;
