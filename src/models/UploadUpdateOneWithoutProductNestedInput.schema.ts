import { z } from 'zod';
import { UploadCreateWithoutProductInputObjectSchema } from './UploadCreateWithoutProductInput.schema';
import { UploadUncheckedCreateWithoutProductInputObjectSchema } from './UploadUncheckedCreateWithoutProductInput.schema';
import { UploadCreateOrConnectWithoutProductInputObjectSchema } from './UploadCreateOrConnectWithoutProductInput.schema';
import { UploadUpsertWithoutProductInputObjectSchema } from './UploadUpsertWithoutProductInput.schema';
import { UploadWhereUniqueInputObjectSchema } from './UploadWhereUniqueInput.schema';
import { UploadUpdateWithoutProductInputObjectSchema } from './UploadUpdateWithoutProductInput.schema';
import { UploadUncheckedUpdateWithoutProductInputObjectSchema } from './UploadUncheckedUpdateWithoutProductInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UploadUpdateOneWithoutProductNestedInput> = z
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
    upsert: z
      .lazy(() => UploadUpsertWithoutProductInputObjectSchema)
      .optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UploadWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UploadUpdateWithoutProductInputObjectSchema),
        z.lazy(() => UploadUncheckedUpdateWithoutProductInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UploadUpdateOneWithoutProductNestedInputObjectSchema = Schema;
