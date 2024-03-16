import { z } from 'zod';
import { UploadUpdateWithoutProductInputObjectSchema } from './UploadUpdateWithoutProductInput.schema';
import { UploadUncheckedUpdateWithoutProductInputObjectSchema } from './UploadUncheckedUpdateWithoutProductInput.schema';
import { UploadCreateWithoutProductInputObjectSchema } from './UploadCreateWithoutProductInput.schema';
import { UploadUncheckedCreateWithoutProductInputObjectSchema } from './UploadUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadUpsertWithoutProductInput> = z
  .object({
    update: z.union([
      z.lazy(() => UploadUpdateWithoutProductInputObjectSchema),
      z.lazy(() => UploadUncheckedUpdateWithoutProductInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UploadCreateWithoutProductInputObjectSchema),
      z.lazy(() => UploadUncheckedCreateWithoutProductInputObjectSchema),
    ]),
  })
  .strict();

export const UploadUpsertWithoutProductInputObjectSchema = Schema;
