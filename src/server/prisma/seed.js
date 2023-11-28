const prisma = require("../prisma");
const mockdata = [
  {
    brand: "Nike",
    category: "Mens shoes",
    imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d706b6dd-32a7-4ed9-81c9-c0808624807c/dunk-low-retro-mens-shoes-njHwD3.png",
    size: 7.5,
  },
  {
    brand: "Adidas",
    category: "Women shoes",
    imageUrl: "https://th.bing.com/th/id/OIP.IaLGIFIJJpFlhA_eTarCEAHaIq?rs=1&pid=ImgDetMain",
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
