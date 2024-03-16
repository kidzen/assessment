import { z } from 'zod';
import { UploadCreateNestedOneWithoutProductInputObjectSchema } from './UploadCreateNestedOneWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductCreateInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    supplier: z.string(),
    image: z
      .lazy(() => UploadCreateNestedOneWithoutProductInputObjectSchema)
      .optional(),
  })
  .strict();

export const ProductCreateInputObjectSchema = Schema;
