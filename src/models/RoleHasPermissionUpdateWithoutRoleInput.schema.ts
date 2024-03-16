import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { PermissionUpdateOneRequiredWithoutRolesNestedInputObjectSchema } from './PermissionUpdateOneRequiredWithoutRolesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionUpdateWithoutRoleInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    permission: z
      .lazy(
        () => PermissionUpdateOneRequiredWithoutRolesNestedInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const RoleHasPermissionUpdateWithoutRoleInputObjectSchema = Schema;
