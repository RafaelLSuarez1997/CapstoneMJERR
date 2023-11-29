const prisma = require("../prisma");

const mockdata = [
  {
    brand: "Nike",
    description: "Recognizing the Dunk's roots as the top-ranking college team sneaker, the Be True To Your School pack looks to the original ad campaign for inspiration. Colors represent top-flight universities, while crisp leather has the perfect amount of sheen to make 'em a hands-down win. So lace up and show off that varsity spirit. Ya game?" ,
    category: "Mens shoes",
    imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d706b6dd-32a7-4ed9-81c9-c0808624807c/dunk-low-retro-mens-shoes-njHwD3.png",
    size: 7.5,
    price: 129.99,
    description: "Recognizing the Dunk's roots as the top-ranking college team sneaker, the Be True To Your School pack looks to the original ad campaign for inspiration. Colors represent top-flight universities, while crisp leather has the perfect amount of sheen to make 'em a hands-down win. So lace up and show off that varsity spirit. Ya game?",
  },
  {
    brand: "Adidas",
    description: "The adidas Superstar Shoes first stepped onto the basketball hardwood in 1970. It didn't take long for them to make the leap from athletic gear to streetwear staple. These shoes show off the materials, proportions and style that made the original such a legend. They've got a smooth leather upper with sporty 3-Stripes and a heel tab. They're finished off with the world-famous rubber shell toe." ,
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
},
{
  brand: "Nike",
  category: "Walking Shoes",
  imageUrl: "https://media.cnn.com/api/v1/images/stellar/prod/nike-motiva-shoe-product-card-cnnu.jpg?q=h_900,w_1600,x_0,y_0",
  size: 12,
  price: 99.99,
  description: "Introducing the latest innovation in walking comfort, the Nike StrideMax Walk. Designed with a perfect blend of style and functionality, these walking shoes are crafted to enhance your every step with cutting-edge technology and sleek aesthetics.",
},
{
  brand: "Adidas",
  category: "Fitness shoes",
  imageUrl: "https://assets.adidas.com/images/w_600,f_auto,q_auto/8a0b7112e93f467996b9af2e0091b8af_9366/Ultrabounce_Running_Shoes_White_HP5788_01_standard.jpg",
  size: 10,
  price: 79.99,
  description: "Traction is a top priority, and the outsole of the WalkBoost Prime delivers on all fronts. Designed with a durable rubber compound and a carefully engineered tread pattern, these shoes offer exceptional grip on a variety of surfaces.",
},
{
  brand: "Converse",
  category: "Fitness shoes",
  imageUrl: "https://media.rackroomshoes.com/img/events/2023/summer/blp/20230706-converse-cb--womens.jpg",
  size: 11,
  price: 39.99,
  description: "Introducing the Converse WalkStar Classic, a timeless blend of iconic style and everyday comfort. Born from the heritage of the legendary Chuck Taylor All Star, these walking shoes embody Converse's legacy of cool, now optimized for your daily walking adventures.",
},
{
  brand: "Nike",
  category: "Running Shoes",
  imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5615d881-6725-422a-b97b-82835fa62411/ja-1-wet-cement-basketball-shoes-bCx2W3.png",
  size: 10,
  price: 59.99,
  description: "Traction is key when it comes to a reliable walking shoe, and the outsole of the StrideMax Walk doesn't disappoint. Featuring a durable rubber compound with a multidirectional tread pattern, these shoes offer exceptional grip on various surfaces, ensuring stability and confidence in each step.",
},
{
  brand: "Adidas",
  category: "Women shoes",
  imageUrl: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i99RDk1ZU0CA/v2/-1x-1.jpg",
  size: 8.5,
  price: 39.99,
  description: "The upper of the Adidas WalkBoost Prime is crafted from a breathable and flexible knit material, providing optimal ventilation to keep your feet cool and comfortable during your walks. The sock-like construction ensures a snug and adaptive fit, wrapping your feet in a supportive embrace.",
},

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
