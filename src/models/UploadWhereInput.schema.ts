import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { FloatNullableFilterObjectSchema } from './FloatNullableFilter.schema';
import { ProductListRelationFilterObjectSchema } from './ProductListRelationFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UploadWhereInputObjectSchema),
        z.lazy(() => UploadWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UploadWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UploadWhereInputObjectSchema),
        z.lazy(() => UploadWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    path: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    type: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    mime_type: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    file_size: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    Product: z.lazy(() => ProductListRelationFilterObjectSchema).optional(),
  })
  .strict();

export const UploadWhereInputObjectSchema = Schema;
