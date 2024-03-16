import { z } from 'zod';
import { PermissionCreateWithoutRolesInputObjectSchema } from './PermissionCreateWithoutRolesInput.schema';
import { PermissionUncheckedCreateWithoutRolesInputObjectSchema } from './PermissionUncheckedCreateWithoutRolesInput.schema';
import { PermissionCreateOrConnectWithoutRolesInputObjectSchema } from './PermissionCreateOrConnectWithoutRolesInput.schema';
import { PermissionUpsertWithoutRolesInputObjectSchema } from './PermissionUpsertWithoutRolesInput.schema';
import { PermissionWhereUniqueInputObjectSchema } from './PermissionWhereUniqueInput.schema';
import { PermissionUpdateWithoutRolesInputObjectSchema } from './PermissionUpdateWithoutRolesInput.schema';
import { PermissionUncheckedUpdateWithoutRolesInputObjectSchema } from './PermissionUncheckedUpdateWithoutRolesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.PermissionUpdateOneRequiredWithoutRolesNestedInput> =
  z
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
      upsert: z
        .lazy(() => PermissionUpsertWithoutRolesInputObjectSchema)
        .optional(),
      connect: z.lazy(() => PermissionWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => PermissionUpdateWithoutRolesInputObjectSchema),
          z.lazy(() => PermissionUncheckedUpdateWithoutRolesInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const PermissionUpdateOneRequiredWithoutRolesNestedInputObjectSchema =
  Schema;
