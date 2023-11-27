const prisma = require("../prisma");
const mockShoes = [
  {
    brand: "Nike",
    category: "Mens shoes",
    size: "7",
  },
  {
    brand: "Adidas",
    category: "Women shoes",
    size: "6",
  },
]
const seed = async () => {
for (shoe of mockShoes) {
await prisma.shoes.create({ data: shoe })
}
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
