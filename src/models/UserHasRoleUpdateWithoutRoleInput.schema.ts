import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutRolesNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutRolesNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleUpdateWithoutRoleInput> = z
  .object({
    id: z
      .union([
        z.string(),
        z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
      ])
      .optional(),
    user: z
      .lazy(() => UserUpdateOneRequiredWithoutRolesNestedInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserHasRoleUpdateWithoutRoleInputObjectSchema = Schema;
