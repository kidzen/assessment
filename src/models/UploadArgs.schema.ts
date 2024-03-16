import { z } from 'zod';
import { UploadSelectObjectSchema } from './UploadSelect.schema';
import { UploadIncludeObjectSchema } from './UploadInclude.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadArgs> = z
  .object({
    select: z.lazy(() => UploadSelectObjectSchema).optional(),
    include: z.lazy(() => UploadIncludeObjectSchema).optional(),
  })
  .strict();

export const UploadArgsObjectSchema = Schema;
