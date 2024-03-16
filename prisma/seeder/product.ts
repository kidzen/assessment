import { fakeProduct } from "./../faker/seeder";
import { prisma } from "@/lib/prisma";

function fakeMany(handler: CallableFunction, quantity = 1) {
  const records = [];
  for (let index = quantity; index > 0; index--) {
    records.push(handler());
  }
  return records;
}

export async function productSeeder() {
  await prisma.product.deleteMany();
  fakeMany(fakeProduct, 10).forEach(
    async (res) => await prisma.product.create({ data: res })
  );
}
