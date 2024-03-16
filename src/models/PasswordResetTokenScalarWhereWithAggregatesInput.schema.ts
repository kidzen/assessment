import { z } from 'zod';
import { StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PasswordResetTokenScalarWhereWithAggregatesInput> =
  z
    .object({
      AND: z
        .union([
          z.lazy(
            () => PasswordResetTokenScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PasswordResetTokenScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      OR: z
        .lazy(
          () => PasswordResetTokenScalarWhereWithAggregatesInputObjectSchema,
        )
        .array()
        .optional(),
      NOT: z
        .union([
          z.lazy(
            () => PasswordResetTokenScalarWhereWithAggregatesInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                PasswordResetTokenScalarWhereWithAggregatesInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      email: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      token: z
        .union([
          z.lazy(() => StringWithAggregatesFilterObjectSchema),
          z.string(),
        ])
        .optional(),
      expires: z
        .union([
          z.lazy(() => DateTimeWithAggregatesFilterObjectSchema),
          z.coerce.date(),
        ])
        .optional(),
    })
    .strict();

export const PasswordResetTokenScalarWhereWithAggregatesInputObjectSchema =
  Schema;
