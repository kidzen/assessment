import { z } from 'zod';
import { UploadWhereInputObjectSchema } from './UploadWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadRelationFilter> = z
  .object({
    is: z
      .lazy(() => UploadWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => UploadWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict();

export const UploadRelationFilterObjectSchema = Schema;
