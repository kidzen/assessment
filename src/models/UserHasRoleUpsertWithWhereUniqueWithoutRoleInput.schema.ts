import { z } from 'zod';
import { UserHasRoleWhereUniqueInputObjectSchema } from './UserHasRoleWhereUniqueInput.schema';
import { UserHasRoleUpdateWithoutRoleInputObjectSchema } from './UserHasRoleUpdateWithoutRoleInput.schema';
import { UserHasRoleUncheckedUpdateWithoutRoleInputObjectSchema } from './UserHasRoleUncheckedUpdateWithoutRoleInput.schema';
import { UserHasRoleCreateWithoutRoleInputObjectSchema } from './UserHasRoleCreateWithoutRoleInput.schema';
import { UserHasRoleUncheckedCreateWithoutRoleInputObjectSchema } from './UserHasRoleUncheckedCreateWithoutRoleInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleUpsertWithWhereUniqueWithoutRoleInput> =
  z
    .object({
      where: z.lazy(() => UserHasRoleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserHasRoleUpdateWithoutRoleInputObjectSchema),
        z.lazy(() => UserHasRoleUncheckedUpdateWithoutRoleInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UserHasRoleCreateWithoutRoleInputObjectSchema),
        z.lazy(() => UserHasRoleUncheckedCreateWithoutRoleInputObjectSchema),
      ]),
    })
    .strict();

export const UserHasRoleUpsertWithWhereUniqueWithoutRoleInputObjectSchema =
  Schema;
