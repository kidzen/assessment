import { z } from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { PasswordResetTokenCountOrderByAggregateInputObjectSchema } from './PasswordResetTokenCountOrderByAggregateInput.schema';
import { PasswordResetTokenMaxOrderByAggregateInputObjectSchema } from './PasswordResetTokenMaxOrderByAggregateInput.schema';
import { PasswordResetTokenMinOrderByAggregateInputObjectSchema } from './PasswordResetTokenMinOrderByAggregateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PasswordResetTokenOrderByWithAggregationInput> =
  z
    .object({
      email: z.lazy(() => SortOrderSchema).optional(),
      token: z.lazy(() => SortOrderSchema).optional(),
      expires: z.lazy(() => SortOrderSchema).optional(),
      _count: z
        .lazy(() => PasswordResetTokenCountOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => PasswordResetTokenMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => PasswordResetTokenMinOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();

export const PasswordResetTokenOrderByWithAggregationInputObjectSchema = Schema;
