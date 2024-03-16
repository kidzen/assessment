import { z } from 'zod';
import { ProductCreateNestedManyWithoutImageInputObjectSchema } from './ProductCreateNestedManyWithoutImageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadCreateInput> = z
  .object({
    id: z.string().optional(),
    path: z.string(),
    type: z.string().optional().nullable(),
    mime_type: z.string().optional().nullable(),
    file_size: z.number().optional().nullable(),
    Product: z
      .lazy(() => ProductCreateNestedManyWithoutImageInputObjectSchema)
      .optional(),
  })
  .strict();

export const UploadCreateInputObjectSchema = Schema;
