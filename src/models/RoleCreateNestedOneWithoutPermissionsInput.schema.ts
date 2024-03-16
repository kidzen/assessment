import { z } from 'zod';
import { RoleCreateWithoutPermissionsInputObjectSchema } from './RoleCreateWithoutPermissionsInput.schema';
import { RoleUncheckedCreateWithoutPermissionsInputObjectSchema } from './RoleUncheckedCreateWithoutPermissionsInput.schema';
import { RoleCreateOrConnectWithoutPermissionsInputObjectSchema } from './RoleCreateOrConnectWithoutPermissionsInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleCreateNestedOneWithoutPermissionsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => RoleCreateWithoutPermissionsInputObjectSchema),
        z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => RoleCreateOrConnectWithoutPermissionsInputObjectSchema)
      .optional(),
    connect: z.lazy(() => RoleWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const RoleCreateNestedOneWithoutPermissionsInputObjectSchema = Schema;
