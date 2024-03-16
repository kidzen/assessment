import { z } from 'zod';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleRole_idUser_idCompoundUniqueInput> = z
  .object({
    role_id: z.string(),
    user_id: z.string(),
  })
  .strict();

export const UserHasRoleRole_idUser_idCompoundUniqueInputObjectSchema = Schema;
