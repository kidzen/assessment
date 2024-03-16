import { z } from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { RoleUpdateOneRequiredWithoutUsersNestedInputObjectSchema } from './RoleUpdateOneRequiredWithoutUsersNestedInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleUpdateWithoutUserInput> = z
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
  })
  .strict();

export const UserHasRoleUpdateWithoutUserInputObjectSchema = Schema;
