import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema } from './RoleUpdateOneRequiredWithoutPermissionsNestedInput.schema';
import { PermissionUpdateOneRequiredWithoutRolesNestedInputObjectSchema } from './PermissionUpdateOneRequiredWithoutRolesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionUpdateInput> = z
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
    permission: z
      .lazy(
        () => PermissionUpdateOneRequiredWithoutRolesNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RoleHasPermissionUpdateInputObjectSchema = Schema;
