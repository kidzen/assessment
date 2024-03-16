import { z } from 'zod';
import { PermissionCountOutputTypeSelectObjectSchema } from './PermissionCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionCountOutputTypeArgs> = z
  .object({
    select: z
      .lazy(() => PermissionCountOutputTypeSelectObjectSchema)
      .optional(),
  })
  .strict();

export const PermissionCountOutputTypeArgsObjectSchema = Schema;
