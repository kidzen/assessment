import { z } from 'zod';
import { UploadArgsObjectSchema } from './UploadArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductInclude> = z
  .object({
    image: z
      .union([z.boolean(), z.lazy(() => UploadArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const ProductIncludeObjectSchema = Schema;
