import { z } from 'zod';
import { UserHasRoleWhereUniqueInputObjectSchema } from './UserHasRoleWhereUniqueInput.schema';
import { UserHasRoleCreateWithoutRoleInputObjectSchema } from './UserHasRoleCreateWithoutRoleInput.schema';
import { UserHasRoleUncheckedCreateWithoutRoleInputObjectSchema } from './UserHasRoleUncheckedCreateWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleCreateOrConnectWithoutRoleInput> = z
  .object({
    where: z.lazy(() => UserHasRoleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserHasRoleCreateWithoutRoleInputObjectSchema),
      z.lazy(() => UserHasRoleUncheckedCreateWithoutRoleInputObjectSchema),
    ]),
  })
  .strict();

export const UserHasRoleCreateOrConnectWithoutRoleInputObjectSchema = Schema;
