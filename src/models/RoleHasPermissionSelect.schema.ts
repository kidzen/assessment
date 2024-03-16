import { z } from 'zod';
import { RoleArgsObjectSchema } from './RoleArgs.schema';
import { PermissionArgsObjectSchema } from './PermissionArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionSelect> = z
  .object({
    id: z.boolean().optional(),
    role_id: z.boolean().optional(),
    permission_id: z.boolean().optional(),
    role: z.union([z.boolean(), z.lazy(() => RoleArgsObjectSchema)]).optional(),
    permission: z
      .union([z.boolean(), z.lazy(() => PermissionArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const RoleHasPermissionSelectObjectSchema = Schema;
