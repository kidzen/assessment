import { z } from 'zod';
import { RoleHasPermissionFindManySchema } from '../findManyRoleHasPermission.schema';
import { PermissionCountOutputTypeArgsObjectSchema } from './PermissionCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionInclude> = z
  .object({
    roles: z
      .union([z.boolean(), z.lazy(() => RoleHasPermissionFindManySchema)])
      .optional(),
    _count: z
      .union([
        z.boolean(),
        z.lazy(() => PermissionCountOutputTypeArgsObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const PermissionIncludeObjectSchema = Schema;
