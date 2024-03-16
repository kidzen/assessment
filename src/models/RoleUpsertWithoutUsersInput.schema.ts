import { z } from 'zod';
import { RoleUpdateWithoutUsersInputObjectSchema } from './RoleUpdateWithoutUsersInput.schema';
import { RoleUncheckedUpdateWithoutUsersInputObjectSchema } from './RoleUncheckedUpdateWithoutUsersInput.schema';
import { RoleCreateWithoutUsersInputObjectSchema } from './RoleCreateWithoutUsersInput.schema';
import { RoleUncheckedCreateWithoutUsersInputObjectSchema } from './RoleUncheckedCreateWithoutUsersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.RoleUpsertWithoutUsersInput> = z
  .object({
    update: z.union([
      z.lazy(() => RoleUpdateWithoutUsersInputObjectSchema),
      z.lazy(() => RoleUncheckedUpdateWithoutUsersInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => RoleCreateWithoutUsersInputObjectSchema),
      z.lazy(() => RoleUncheckedCreateWithoutUsersInputObjectSchema),
    ]),
  })
  .strict();

export const RoleUpsertWithoutUsersInputObjectSchema = Schema;
