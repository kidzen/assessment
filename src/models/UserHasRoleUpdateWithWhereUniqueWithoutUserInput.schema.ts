import { z } from 'zod';
import { UserHasRoleWhereUniqueInputObjectSchema } from './UserHasRoleWhereUniqueInput.schema';
import { UserHasRoleUpdateWithoutUserInputObjectSchema } from './UserHasRoleUpdateWithoutUserInput.schema';
import { UserHasRoleUncheckedUpdateWithoutUserInputObjectSchema } from './UserHasRoleUncheckedUpdateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleUpdateWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => UserHasRoleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserHasRoleUpdateWithoutUserInputObjectSchema),
        z.lazy(() => UserHasRoleUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const UserHasRoleUpdateWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
