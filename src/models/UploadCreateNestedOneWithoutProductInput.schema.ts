import { z } from 'zod';
import { UploadCreateWithoutProductInputObjectSchema } from './UploadCreateWithoutProductInput.schema';
import { UploadUncheckedCreateWithoutProductInputObjectSchema } from './UploadUncheckedCreateWithoutProductInput.schema';
import { UploadCreateOrConnectWithoutProductInputObjectSchema } from './UploadCreateOrConnectWithoutProductInput.schema';
import { UploadWhereUniqueInputObjectSchema } from './UploadWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadCreateNestedOneWithoutProductInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UploadCreateWithoutProductInputObjectSchema),
        z.lazy(() => UploadUncheckedCreateWithoutProductInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UploadCreateOrConnectWithoutProductInputObjectSchema)
      .optional(),
    connect: z.lazy(() => UploadWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const UploadCreateNestedOneWithoutProductInputObjectSchema = Schema;
