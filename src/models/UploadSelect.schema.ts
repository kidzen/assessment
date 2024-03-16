import { z } from 'zod';
import { ProductFindManySchema } from '../findManyProduct.schema';
import { UploadCountOutputTypeArgsObjectSchema } from './UploadCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadSelect> = z
  .object({
    id: z.boolean().optional(),
    path: z.boolean().optional(),
    type: z.boolean().optional(),
    mime_type: z.boolean().optional(),
    file_size: z.boolean().optional(),
    Product: z
      .union([z.boolean(), z.lazy(() => ProductFindManySchema)])
      .optional(),
    _count: z
      .union([z.boolean(), z.lazy(() => UploadCountOutputTypeArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const UploadSelectObjectSchema = Schema;
