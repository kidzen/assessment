import { prisma } from "@/lib/prisma";
import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";

export async function roleSeeder() {
  await cleanup();
  await createAdmin();
  await createGuest();
}

async function cleanup() {
  console.info("Cleanup roles and permission ...");
  await prisma.roleHasPermission.deleteMany();
  await prisma.user.deleteMany();
  await prisma.role.deleteMany();
  await prisma.permission.deleteMany();
}

async function createAdmin() {
  const adminRole = await prisma.role.create({
    data: {
      name: "Admin",
      permissions: {
        create: ["create", "view", "update", "delete"].map((action) => ({
          permission: { create: { action, subject: "Product" } },
        })),
      },
    },
  });

  console.info("Admin role created.");

  await prisma.user.create({
    data: {
      email: `${adminRole.name}@mail.com`,
      name: faker.person.fullName(),
      password: await bcrypt.hash("secret", 10),
      roles: {
        create: [
          {
            role: {
              connectOrCreate: {
                where: { id: adminRole.id },
                create: { name: adminRole.name },
              },
            },
          },
        ],
      },
    },
  });
  console.info(`Admin user created with email ${adminRole.name}@mail.com.`);
}

async function createGuest() {
  const guestPermission = await prisma.permission.findFirstOrThrow({
    where: { action: "view", subject: "Product" },
  });

  const guestRole = await prisma.role.create({
    data: {
      name: "Guest",
      permissions: {
        create: [
          {
            permission: {
              connectOrCreate: {
                where: { id: guestPermission.id },
                create: { action: "view", subject: "Product" },
              },
            },
          },
        ],
      },
    },
  });
  console.info("Guest role created.");

  await prisma.user.create({
    data: {
      email: `${guestRole.name}@mail.com`,
      name: faker.person.fullName(),
      password: await bcrypt.hash("secret", 10),
      roles: {
        create: [
          {
            role: {
              connectOrCreate: {
                where: { id: guestRole.id },
                create: { name: guestRole.name },
              },
            },
          },
        ],
      },
    },
  });
  console.info(`Guest user created with email ${guestRole.name}@mail.com.`);
}
