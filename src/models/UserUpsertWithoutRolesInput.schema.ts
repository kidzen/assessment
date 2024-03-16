import { z } from 'zod';
import { UserUpdateWithoutRolesInputObjectSchema } from './UserUpdateWithoutRolesInput.schema';
import { UserUncheckedUpdateWithoutRolesInputObjectSchema } from './UserUncheckedUpdateWithoutRolesInput.schema';
import { UserCreateWithoutRolesInputObjectSchema } from './UserCreateWithoutRolesInput.schema';
import { UserUncheckedCreateWithoutRolesInputObjectSchema } from './UserUncheckedCreateWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpsertWithoutRolesInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutRolesInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutRolesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutRolesInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutRolesInputObjectSchema),
    ]),
  })
  .strict();

export const UserUpsertWithoutRolesInputObjectSchema = Schema;
