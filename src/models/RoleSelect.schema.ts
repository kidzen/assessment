import { z } from 'zod';
import { RoleHasPermissionFindManySchema } from '../findManyRoleHasPermission.schema';
import { UserHasRoleFindManySchema } from '../findManyUserHasRole.schema';
import { RoleCountOutputTypeArgsObjectSchema } from './RoleCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    permissions: z
      .union([z.boolean(), z.lazy(() => RoleHasPermissionFindManySchema)])
      .optional(),
    users: z
      .union([z.boolean(), z.lazy(() => UserHasRoleFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => RoleCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const RoleSelectObjectSchema = Schema;
