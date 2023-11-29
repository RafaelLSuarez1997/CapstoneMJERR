const prisma = require("../prisma");

const mockdata = [
  {
    brand: "Nike",
    category: "Mens shoes",
    imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d706b6dd-32a7-4ed9-81c9-c0808624807c/dunk-low-retro-mens-shoes-njHwD3.png",
    size: 7.5,
    price: 129.99,
    description: "Recognizing the Dunk's roots as the top-ranking college team sneaker, the Be True To Your School pack looks to the original ad campaign for inspiration. Colors represent top-flight universities, while crisp leather has the perfect amount of sheen to make 'em a hands-down win. So lace up and show off that varsity spirit. Ya game?",
  },
  {
    brand: "Adidas",
    category: "Women shoes",
    imageUrl: "https://th.bing.com/th/id/OIP.IaLGIFIJJpFlhA_eTarCEAHaIq?rs=1&pid=ImgDetMain",
    size: 6,
    price: 99.99,
    description: "The adidas Superstar Shoes first stepped onto the basketball hardwood in 1970. It didn't take long for them to make the leap from athletic gear to streetwear staple. These shoes show off the materials, proportions and style that made the original such a legend. They've got a smooth leather upper with sporty 3-Stripes and a heel tab. They're finished off with the world-famous rubber shell toe.",
  },
  {
  brand: "Puma",
  category: "Running shoes",
  imageUrl: "https://i.pinimg.com/originals/1e/62/61/1e6261db8a5988808bbc03e3cc0706f5.jpg",
  size: 8,
  price: 79.99,
  description: "Engineered for speed and comfort, these Puma running shoes are perfect for your daily runs. The breathable mesh upper provides excellent ventilation, and the responsive cushioning ensures a smooth ride.",
},
{
  brand: "Converse",
  category: "Casual sneakers",
  imageUrl: "https://th.bing.com/th/id/OIP.j1ywqISxSgkiG--w1owF9QHaHa?rs=1&pid=ImgDetMain",
  size: 7,
  price: 59.99,
  description: "Classic and timeless, Converse Chuck Taylor All Star sneakers are a must-have for every wardrobe. The canvas upper and iconic rubber toe cap make these shoes a versatile choice for any casual outfit.",
},
{
  brand: "New Balance",
  category: "Walking shoes",
  imageUrl: "https://www.dressinn.com/f/13729/137298457_3/new-balance-574-summer-shore.jpg",
  size: 7.5,
  price: 89.99,
  description: "Experience unmatched comfort with New Balance walking shoes. The supportive midsole and cushioned insole ensure all-day comfort, while the durable outsole provides excellent traction for your daily walks.",
},
{
  brand: "Reebok",
  category: "Fitness shoes",
  imageUrl: "https://basketo.co.uk/eng_pl_Reebok-Classic-Leather-49799-20563_2.jpg",
  size: 8.5,
  price: 69.99,
  description: "Designed for your active lifestyle, Reebok fitness shoes offer a perfect blend of style and functionality. The lightweight design and flexible sole make them ideal for workouts and casual wear alike.",
}

];

const seed = async () => {
  for (const item of mockdata) {
    await prisma.items.create({ data: item });
  }
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
