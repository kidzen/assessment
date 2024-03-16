import { z } from 'zod';
import { UploadArgsObjectSchema } from './UploadArgs.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    image_id: z.boolean().optional(),
    supplier: z.boolean().optional(),
    image: z
      .union([z.boolean(), z.lazy(() => UploadArgsObjectSchema)])
      .optional(),
  })
  .strict();

export const ProductSelectObjectSchema = Schema;
