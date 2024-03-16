import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    path: z.literal(true).optional(),
    type: z.literal(true).optional(),
    mime_type: z.literal(true).optional(),
    file_size: z.literal(true).optional(),
  })
  .strict();

export const UploadMinAggregateInputObjectSchema = Schema;
