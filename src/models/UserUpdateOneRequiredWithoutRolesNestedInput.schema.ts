import { z } from 'zod';
import { UserCreateWithoutRolesInputObjectSchema } from './UserCreateWithoutRolesInput.schema';
import { UserUncheckedCreateWithoutRolesInputObjectSchema } from './UserUncheckedCreateWithoutRolesInput.schema';
import { UserCreateOrConnectWithoutRolesInputObjectSchema } from './UserCreateOrConnectWithoutRolesInput.schema';
import { UserUpsertWithoutRolesInputObjectSchema } from './UserUpsertWithoutRolesInput.schema';
import { UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateWithoutRolesInputObjectSchema } from './UserUpdateWithoutRolesInput.schema';
import { UserUncheckedUpdateWithoutRolesInputObjectSchema } from './UserUncheckedUpdateWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutRolesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutRolesInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutRolesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => UserCreateOrConnectWithoutRolesInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => UserUpsertWithoutRolesInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutRolesInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutRolesInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const UserUpdateOneRequiredWithoutRolesNestedInputObjectSchema = Schema;
