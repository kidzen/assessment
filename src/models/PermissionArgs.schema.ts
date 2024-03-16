import { z } from 'zod';
import { PermissionSelectObjectSchema } from './PermissionSelect.schema';
import { PermissionIncludeObjectSchema } from './PermissionInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionArgs> = z
  .object({
    select: z.lazy(() => PermissionSelectObjectSchema).optional(),
    include: z.lazy(() => PermissionIncludeObjectSchema).optional(),
  })
  .strict();

export const PermissionArgsObjectSchema = Schema;
