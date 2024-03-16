import { z } from 'zod';
import { PasswordResetTokenSelectObjectSchema } from './PasswordResetTokenSelect.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PasswordResetTokenArgs> = z
  .object({
    select: z.lazy(() => PasswordResetTokenSelectObjectSchema).optional(),
  })
  .strict();

export const PasswordResetTokenArgsObjectSchema = Schema;
