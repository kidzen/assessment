import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PasswordResetTokenWhereUniqueInput> = z
  .object({
    email: z.string().optional(),
    token: z.string().optional(),
  })
  .strict();

export const PasswordResetTokenWhereUniqueInputObjectSchema = Schema;
