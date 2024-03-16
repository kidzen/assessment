import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { UploadOrderByWithRelationInputObjectSchema } from './UploadOrderByWithRelationInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.ProductOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    image_id: z
      .union([
        z.lazy(() => SortOrderSchema),
        z.lazy(() => SortOrderInputObjectSchema),
      ])
      .optional(),
    supplier: z.lazy(() => SortOrderSchema).optional(),
    image: z.lazy(() => UploadOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict();

export const ProductOrderByWithRelationInputObjectSchema = Schema;
