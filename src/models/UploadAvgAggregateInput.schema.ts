import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadAvgAggregateInputType> = z
  .object({
    file_size: z.literal(true).optional(),
  })
  .strict();

export const UploadAvgAggregateInputObjectSchema = Schema;
