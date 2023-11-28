const prisma = require("../prisma");
const mockdata = [
  {
    brand: "Nike",
    price: 199,
    description: "Recognizing the Dunk's roots as the top-ranking college team sneaker, the Be True To Your School pack looks to the original ad campaign for inspiration. Colors represent top-flight universities, while crisp leather has the perfect amount of sheen to make 'em a hands-down win. So lace up and show off that varsity spirit. Ya game?" ,
    category: "Mens shoes",
    imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d706b6dd-32a7-4ed9-81c9-c0808624807c/dunk-low-retro-mens-shoes-njHwD3.png",
    size: 7.5,
  },
  {
    brand: "Adidas",
    price: 299,
    description: "The adidas Superstar Shoes first stepped onto the basketball hardwood in 1970. It didn't take long for them to make the leap from athletic gear to streetwear staple. These shoes show off the materials, proportions and style that made the original such a legend. They've got a smooth leather upper with sporty 3-Stripes and a heel tab. They're finished off with the world-famous rubber shell toe." ,
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
