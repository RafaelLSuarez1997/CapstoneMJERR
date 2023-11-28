const prisma = require("../prisma");
const mockdata = [
  {
    brand: "Nike",
    category: "Mens shoes",
    imageUrl: "https://images.app.goo.gl/x7njWd9AhDxEF3Vy8",
    size: 7.5,
  },
  {
    brand: "Adidas",
    category: "Women shoes",
    imageUrl: "https://images.app.goo.gl/x7njWd9AhDxEF3Vy8",
    size: 6,
  },
]
const seed = async () => {
for (item of mockdata) {
await prisma.items.create({ data: item })
}
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
