import { z } from 'zod';
import { ProductFindManySchema } from '../findManyProduct.schema';
import { UploadCountOutputTypeArgsObjectSchema } from './UploadCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadInclude> = z
  .object({
    Product: z
      .union([z.boolean(), z.lazy(() => ProductFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UploadCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const UploadIncludeObjectSchema = Schema;
