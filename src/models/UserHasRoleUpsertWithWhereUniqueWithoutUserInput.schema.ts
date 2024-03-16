import { z } from 'zod';
import { UserHasRoleWhereUniqueInputObjectSchema } from './UserHasRoleWhereUniqueInput.schema';
import { UserHasRoleUpdateWithoutUserInputObjectSchema } from './UserHasRoleUpdateWithoutUserInput.schema';
import { UserHasRoleUncheckedUpdateWithoutUserInputObjectSchema } from './UserHasRoleUncheckedUpdateWithoutUserInput.schema';
import { UserHasRoleCreateWithoutUserInputObjectSchema } from './UserHasRoleCreateWithoutUserInput.schema';
import { UserHasRoleUncheckedCreateWithoutUserInputObjectSchema } from './UserHasRoleUncheckedCreateWithoutUserInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserHasRoleUpsertWithWhereUniqueWithoutUserInput> =
  z
    .object({
      where: z.lazy(() => UserHasRoleWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => UserHasRoleUpdateWithoutUserInputObjectSchema),
        z.lazy(() => UserHasRoleUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => UserHasRoleCreateWithoutUserInputObjectSchema),
        z.lazy(() => UserHasRoleUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();

export const UserHasRoleUpsertWithWhereUniqueWithoutUserInputObjectSchema =
  Schema;
