import { z } from 'zod';
import { UserHasRoleWhereUniqueInputObjectSchema } from './UserHasRoleWhereUniqueInput.schema';
import { UserHasRoleCreateWithoutUserInputObjectSchema } from './UserHasRoleCreateWithoutUserInput.schema';
import { UserHasRoleUncheckedCreateWithoutUserInputObjectSchema } from './UserHasRoleUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => UserHasRoleWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserHasRoleCreateWithoutUserInputObjectSchema),
      z.lazy(() => UserHasRoleUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict();

export const UserHasRoleCreateOrConnectWithoutUserInputObjectSchema = Schema;
