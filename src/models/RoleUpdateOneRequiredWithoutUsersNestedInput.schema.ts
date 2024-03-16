import { z } from 'zod';
import { RoleCreateWithoutUsersInputObjectSchema } from './RoleCreateWithoutUsersInput.schema';
import { RoleUncheckedCreateWithoutUsersInputObjectSchema } from './RoleUncheckedCreateWithoutUsersInput.schema';
import { RoleCreateOrConnectWithoutUsersInputObjectSchema } from './RoleCreateOrConnectWithoutUsersInput.schema';
import { RoleUpsertWithoutUsersInputObjectSchema } from './RoleUpsertWithoutUsersInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutUsersInputObjectSchema } from './RoleUpdateWithoutUsersInput.schema';
import { RoleUncheckedUpdateWithoutUsersInputObjectSchema } from './RoleUncheckedUpdateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateOneRequiredWithoutUsersNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RoleCreateWithoutUsersInputObjectSchema),
        z.lazy(() => RoleUncheckedCreateWithoutUsersInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => RoleCreateOrConnectWithoutUsersInputObjectSchema)
      .optional(),
    upsert: z.lazy(() => RoleUpsertWithoutUsersInputObjectSchema).optional(),
    connect: z.lazy(() => RoleWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => RoleUpdateWithoutUsersInputObjectSchema),
        z.lazy(() => RoleUncheckedUpdateWithoutUsersInputObjectSchema),
      ])
      .optional(),
  })
  .strict();

export const RoleUpdateOneRequiredWithoutUsersNestedInputObjectSchema = Schema;
