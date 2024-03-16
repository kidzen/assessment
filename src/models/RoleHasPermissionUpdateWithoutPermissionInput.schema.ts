import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema } from './RoleUpdateOneRequiredWithoutPermissionsNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionUpdateWithoutPermissionInput> =
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      role: z
        .lazy(
          () => RoleUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();

export const RoleHasPermissionUpdateWithoutPermissionInputObjectSchema = Schema;
