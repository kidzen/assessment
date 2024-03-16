import { z } from 'zod';
import { UploadCountOutputTypeSelectObjectSchema } from './UploadCountOutputTypeSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => UploadCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict();

export const UploadCountOutputTypeArgsObjectSchema = Schema;
