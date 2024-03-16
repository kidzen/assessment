import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadCreateWithoutProductInput> = z
  .object({
    id: z.string().optional(),
    path: z.string(),
    type: z.string().optional().nullable(),
    mime_type: z.string().optional().nullable(),
    file_size: z.number().optional().nullable(),
  })
  .strict();

export const UploadCreateWithoutProductInputObjectSchema = Schema;
