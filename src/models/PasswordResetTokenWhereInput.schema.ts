import { z } from 'zod';
import { StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema } from './DateTimeFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PasswordResetTokenWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PasswordResetTokenWhereInputObjectSchema),
        z.lazy(() => PasswordResetTokenWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PasswordResetTokenWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PasswordResetTokenWhereInputObjectSchema),
        z.lazy(() => PasswordResetTokenWhereInputObjectSchema).array(),
      ])
      .optional(),
    email: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    token: z
      .union([z.lazy(() => StringFilterObjectSchema), z.string()])
      .optional(),
    expires: z
      .union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()])
      .optional(),
  })
  .strict();

export const PasswordResetTokenWhereInputObjectSchema = Schema;
