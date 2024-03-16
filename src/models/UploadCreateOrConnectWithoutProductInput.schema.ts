import { z } from 'zod';
import { UploadWhereUniqueInputObjectSchema } from './UploadWhereUniqueInput.schema';
import { UploadCreateWithoutProductInputObjectSchema } from './UploadCreateWithoutProductInput.schema';
import { UploadUncheckedCreateWithoutProductInputObjectSchema } from './UploadUncheckedCreateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadCreateOrConnectWithoutProductInput> = z
  .object({
    where: z.lazy(() => UploadWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UploadCreateWithoutProductInputObjectSchema),
      z.lazy(() => UploadUncheckedCreateWithoutProductInputObjectSchema),
    ]),
  })
  .strict();

export const UploadCreateOrConnectWithoutProductInputObjectSchema = Schema;
