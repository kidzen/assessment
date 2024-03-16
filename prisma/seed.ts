import { prisma } from "@/lib/prisma";
import { productSeeder } from "./seeder/product";
import { roleSeeder } from "./seeder/role";

async function main() {
  await Promise.all([roleSeeder(), productSeeder()]);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
