import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleHasPermissionUpdateManyWithoutPermissionNestedInputObjectSchema } from './RoleHasPermissionUpdateManyWithoutPermissionNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionUpdateInput> = z
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
          RoleHasPermissionUpdateManyWithoutPermissionNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PermissionUpdateInputObjectSchema = Schema;
