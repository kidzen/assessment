import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PasswordResetTokenSelect> = z
  .object({
    email: z.boolean().optional(),
    token: z.boolean().optional(),
    expires: z.boolean().optional(),
  })
  .strict();

export const PasswordResetTokenSelectObjectSchema = Schema;
