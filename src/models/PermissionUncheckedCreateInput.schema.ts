import { z } from 'zod';
import { RoleHasPermissionUncheckedCreateNestedManyWithoutPermissionInputObjectSchema } from './RoleHasPermissionUncheckedCreateNestedManyWithoutPermissionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    action: z.string(),
    subject: z.string(),
    roles: z
      .lazy(
        () =>
          RoleHasPermissionUncheckedCreateNestedManyWithoutPermissionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PermissionUncheckedCreateInputObjectSchema = Schema;
