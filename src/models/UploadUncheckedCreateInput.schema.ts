import { z } from 'zod';
import { ProductUncheckedCreateNestedManyWithoutImageInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutImageInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    path: z.string(),
    type: z.string().optional().nullable(),
    mime_type: z.string().optional().nullable(),
    file_size: z.number().optional().nullable(),
    Product: z
      .lazy(() => ProductUncheckedCreateNestedManyWithoutImageInputObjectSchema)
      .optional(),
  })
  .strict();

export const UploadUncheckedCreateInputObjectSchema = Schema;
