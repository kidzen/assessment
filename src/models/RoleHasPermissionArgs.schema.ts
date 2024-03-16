import { z } from 'zod';
import { RoleHasPermissionSelectObjectSchema } from './RoleHasPermissionSelect.schema';
import { RoleHasPermissionIncludeObjectSchema } from './RoleHasPermissionInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleHasPermissionArgs> = z
  .object({
    select: z.lazy(() => RoleHasPermissionSelectObjectSchema).optional(),
    include: z.lazy(() => RoleHasPermissionIncludeObjectSchema).optional(),
  })
  .strict();

export const RoleHasPermissionArgsObjectSchema = Schema;
