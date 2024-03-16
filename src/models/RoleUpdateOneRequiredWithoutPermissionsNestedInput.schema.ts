import { z } from 'zod';
import { RoleCreateWithoutPermissionsInputObjectSchema } from './RoleCreateWithoutPermissionsInput.schema';
import { RoleUncheckedCreateWithoutPermissionsInputObjectSchema } from './RoleUncheckedCreateWithoutPermissionsInput.schema';
import { RoleCreateOrConnectWithoutPermissionsInputObjectSchema } from './RoleCreateOrConnectWithoutPermissionsInput.schema';
import { RoleUpsertWithoutPermissionsInputObjectSchema } from './RoleUpsertWithoutPermissionsInput.schema';
import { RoleWhereUniqueInputObjectSchema } from './RoleWhereUniqueInput.schema';
import { RoleUpdateWithoutPermissionsInputObjectSchema } from './RoleUpdateWithoutPermissionsInput.schema';
import { RoleUncheckedUpdateWithoutPermissionsInputObjectSchema } from './RoleUncheckedUpdateWithoutPermissionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpdateOneRequiredWithoutPermissionsNestedInput> =
  z
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
      upsert: z
        .lazy(() => RoleUpsertWithoutPermissionsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => RoleWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(() => RoleUpdateWithoutPermissionsInputObjectSchema),
          z.lazy(() => RoleUncheckedUpdateWithoutPermissionsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();

export const RoleUpdateOneRequiredWithoutPermissionsNestedInputObjectSchema =
  Schema;
