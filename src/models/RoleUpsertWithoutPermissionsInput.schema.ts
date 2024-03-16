import { z } from 'zod';
import { RoleUpdateWithoutPermissionsInputObjectSchema } from './RoleUpdateWithoutPermissionsInput.schema';
import { RoleUncheckedUpdateWithoutPermissionsInputObjectSchema } from './RoleUncheckedUpdateWithoutPermissionsInput.schema';
import { RoleCreateWithoutPermissionsInputObjectSchema } from './RoleCreateWithoutPermissionsInput.schema';
import { RoleUncheckedCreateWithoutPermissionsInputObjectSchema } from './RoleUncheckedCreateWithoutPermissionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpsertWithoutPermissionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => RoleUpdateWithoutPermissionsInputObjectSchema),
      z.lazy(() => RoleUncheckedUpdateWithoutPermissionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RoleCreateWithoutPermissionsInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutPermissionsInputObjectSchema),
    ]),
  })
  .strict();

export const RoleUpsertWithoutPermissionsInputObjectSchema = Schema;
