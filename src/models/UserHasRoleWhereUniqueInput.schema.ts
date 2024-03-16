import { z } from 'zod';
import { UserHasRoleRole_idUser_idCompoundUniqueInputObjectSchema } from './UserHasRoleRole_idUser_idCompoundUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    role_id_user_id: z
      .lazy(() => UserHasRoleRole_idUser_idCompoundUniqueInputObjectSchema)
      .optional(),
  })
  .strict();

export const UserHasRoleWhereUniqueInputObjectSchema = Schema;
