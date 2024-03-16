import { z } from 'zod';
import { UserHasRoleWhereUniqueInputObjectSchema } from './UserHasRoleWhereUniqueInput.schema';
import { UserHasRoleUpdateWithoutRoleInputObjectSchema } from './UserHasRoleUpdateWithoutRoleInput.schema';
import { UserHasRoleUncheckedUpdateWithoutRoleInputObjectSchema } from './UserHasRoleUncheckedUpdateWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleUpdateWithWhereUniqueWithoutRoleInput> =
  z
    .object({
      where: z.lazy(() => UserHasRoleWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => UserHasRoleUpdateWithoutRoleInputObjectSchema),
        z.lazy(() => UserHasRoleUncheckedUpdateWithoutRoleInputObjectSchema),
      ]),
    })
    .strict();

export const UserHasRoleUpdateWithWhereUniqueWithoutRoleInputObjectSchema =
  Schema;
