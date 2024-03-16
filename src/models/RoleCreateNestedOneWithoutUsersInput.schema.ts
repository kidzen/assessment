import { z } from 'zod';
import { RoleCreateWithoutUsersInputObjectSchema } from './RoleCreateWithoutUsersInput.schema';
import { RoleUncheckedCreateWithoutUsersInputObjectSchema } from './RoleUncheckedCreateWithoutUsersInput.schema';
import { RoleCreateOrConnectWithoutUsersInputObjectSchema } from './RoleCreateOrConnectWithoutUsersInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateNestedOneWithoutUsersInput> = z
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
    connect: z.lazy(() => RoleWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const RoleCreateNestedOneWithoutUsersInputObjectSchema = Schema;
