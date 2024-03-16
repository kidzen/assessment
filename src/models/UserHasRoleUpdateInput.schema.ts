import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleUpdateOneRequiredWithoutUsersNestedInputObjectSchema } from './RoleUpdateOneRequiredWithoutUsersNestedInput.schema';
import { UserUpdateOneRequiredWithoutRolesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutRolesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleUpdateInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    role: z
      .lazy(() => RoleUpdateOneRequiredWithoutUsersNestedInputObjectSchema)
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutRolesNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserHasRoleUpdateInputObjectSchema = Schema;
