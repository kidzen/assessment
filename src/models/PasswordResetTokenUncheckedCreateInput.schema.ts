import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PasswordResetTokenUncheckedCreateInput> = z
  .object({
    email: z.string(),
    token: z.string(),
    expires: z.coerce.date(),
  })
  .strict();

export const PasswordResetTokenUncheckedCreateInputObjectSchema = Schema;
