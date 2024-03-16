import { z } from 'zod';
import { PermissionCreateWithoutRolesInputObjectSchema } from './PermissionCreateWithoutRolesInput.schema';
import { PermissionUncheckedCreateWithoutRolesInputObjectSchema } from './PermissionUncheckedCreateWithoutRolesInput.schema';
import { PermissionCreateOrConnectWithoutRolesInputObjectSchema } from './PermissionCreateOrConnectWithoutRolesInput.schema';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionCreateNestedOneWithoutRolesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PermissionCreateWithoutRolesInputObjectSchema),
        z.lazy(() => PermissionUncheckedCreateWithoutRolesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z
      .lazy(() => PermissionCreateOrConnectWithoutRolesInputObjectSchema)
      .optional(),
    connect: z.lazy(() => PermissionWhereUniqueInputObjectSchema).optional(),
  })
  .strict();

export const PermissionCreateNestedOneWithoutRolesInputObjectSchema = Schema;
