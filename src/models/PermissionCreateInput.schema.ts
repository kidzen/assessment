import { z } from 'zod';
import { RoleHasPermissionCreateNestedManyWithoutPermissionInputObjectSchema } from './RoleHasPermissionCreateNestedManyWithoutPermissionInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionCreateInput> = z
  .object({
    id: z.string().optional(),
    action: z.string(),
    subject: z.string(),
    roles: z
      .lazy(
        () =>
          RoleHasPermissionCreateNestedManyWithoutPermissionInputObjectSchema,
      )
      .optional(),
  })
  .strict();

export const PermissionCreateInputObjectSchema = Schema;
