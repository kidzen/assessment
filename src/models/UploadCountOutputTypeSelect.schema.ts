import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadCountOutputTypeSelect> = z
  .object({
    Product: z.boolean().optional(),
  })
  .strict();

export const UploadCountOutputTypeSelectObjectSchema = Schema;
