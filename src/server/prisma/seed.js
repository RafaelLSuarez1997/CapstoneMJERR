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
    imageUrl: "https://www.famousfootwear.com/blob/product-images/20000/42/93/3/42933_left_feed1000.jpg",
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
  imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a056f685-3b15-4b05-9989-412893c6dae8/pegasus-40-womens-road-running-shoes-L80k6C.png",
  size: 12,
  price: 99.99,
  description: "Introducing the latest innovation in walking comfort, the Nike StrideMax Walk. Designed with a perfect blend of style and functionality, these walking shoes are crafted to enhance your every step with cutting-edge technology and sleek aesthetics.",
},
{
  brand: "Adidas",
  category: "Fitness shoes",
  imageUrl: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1676305578-adios-pro-3-1676305497.jpg?crop=1.00xw:0.564xh;0,0.205xh&resize=980:*",
  size: 10,
  price: 79.99,
  description: "Traction is a top priority, and the outsole of the WalkBoost Prime delivers on all fronts. Designed with a durable rubber compound and a carefully engineered tread pattern, these shoes offer exceptional grip on a variety of surfaces.",
},
{
  brand: "Converse",
  category: "Fitness shoes",
  imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aa9b6fb6-a821-4167-9cc8-0137e3764b05/chuck-taylor-all-star-lift-platform-canvas-womens-shoes-1kxzVW.png",
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
{ //ddddddddd
  brand: "Adidas",
  category: "Women shoes",
  imageUrl: "https://www.sportsdirect.com/images/imgzoom/18/18037203_xxl_a1.jpg",
  size: 6,
  price: 45.99,
  description: "Adidas Superstar: The classic Adidas Superstar, known for its shell toe and three stripes, combines streetwear flair with timeless design, making it a go-to choice for casual fashion.",
},
{
  brand: "Jordan",
  category: "Mens shoes",
  imageUrl: "https://extrabutterny.com/cdn/shop/files/CT8012-170-1.jpg?v=1699479677",
  size: 12,
  price: 99.99,
  description: "Jordan 4 Retro: Known for its distinctive mesh paneling and visible Air cushioning unit, the Jordan 4 Retro is a streetwear staple that effortlessly combines retro aesthetics with modern comfort.",
},
{
  brand: "Nike",
  category: "Running shoes",
  imageUrl: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e567eb98-1fcf-40c8-9c44-3d8c2be81981/pegasus-trail-4-trail-running-shoes-SX0z3P.png",
  size: 5,
  price: 45.99,
  description: "Nike Blazer Mid '77: The Nike Blazer Mid '77 pays homage to vintage basketball style, featuring a leather upper, oversized Swoosh, and a retro design that effortlessly transitions from the court to the streets.",
},
{
  brand: "Converse",
  category: "Fitness shoes",
  imageUrl: "https://i.pinimg.com/736x/52/55/ee/5255eed5367bdbae74d66e189c387144.jpg",
  size: 7.5,
  price: 35.99,
  description: "Converse One Star: The Converse One Star exudes skate culture cool, featuring a low-top profile, suede upper, and the distinctive single star emblem, capturing the essence of street-style authenticity.",
},
{
  brand: "Adidas",
  category: "Women shoes",
  imageUrl: "https://m.media-amazon.com/images/I/31uWouUN03L._AC_UL240_SR240,220_.jpg",
  size: 9.5,
  price: 39.99,
  description: "Adidas NMD R1: The Adidas NMD R1 blends urban style with advanced cushioning technology, featuring a sock-like Primeknit upper and distinctive midsole plugs for a modern and functional look.",
},
{
  brand: "Sketchers",
  category: "Mens shoes",
  imageUrl: "https://m.media-amazon.com/images/I/71K-4v+DT9L._AC_SR768,1024_.jpg",
  size: 10,
  price: 49.99, 
  description: "The Skechers D'Lites series is a blend of comfort and retro-chic style, featuring a chunky sole and vibrant color accents, making it a go-to choice for those seeking a playful and comfortable everyday sneaker.",
},
{
  brand: "Nike",
  category: "Running shoes",
  imageUrl: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/63a84179-a3d8-4660-b805-4d81426ab8ba/gt-jump-2-ep-basketball-shoes-1F15Gp.png",
  size: 11.5,
  price: 55.99,
  description: "Nike Blazer Mid '77: The Nike Blazer Mid '77 pays homage to vintage basketball style, featuring a leather upper, oversized Swoosh, and a retro design that effortlessly transitions from the court to the streets.",
},
{
  brand: "Converse",
  category: "Walking shoes",
  imageUrl: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aa9b6fb6-a821-4167-9cc8-0137e3764b05/chuck-taylor-all-star-lift-platform-canvas-womens-shoes-1kxzVW.png",
  size: 10,
  price: 69.99,
  description: "Converse Chuck 70: An upgraded version of the classic Chuck Taylor, the Chuck 70 features enhanced comfort and durability, maintaining the iconic silhouette while offering a premium feel.",
},
{
  brand: "New Balance",
  category: "Mens shoes",
  imageUrl: "https://i.ebayimg.com/images/g/yIIAAOSwD61lBfa9/s-l1600.jpg",
  size: 13,
  price: 59.99,
  description: "New Balance 990: The New Balance 990 is an enduring symbol of craftsmanship and comfort, known for its premium suede and mesh upper, supportive midsole, and iconic N logo, making it a classic choice for those who appreciate both style and functionality.",
},
{
  brand: "Puma",
  category: "Running shoes",
  imageUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/306462/03/sv01/fnd/PNA/fmt/png/Scuderia-Ferrari-Drift-Cat-5-Ultra-II-Little-Kids'-Shoes",
  size: 8,
  price: 30.99,
  description: "The upper of the Adidas WalkBoost Prime is crafted from a breathable and flexible knit material, providing optimal ventilation to keep your feet cool and comfortable during your walks. The sock-like construction ensures a snug and adaptive fit, wrapping your feet in a supportive embrace.",
},
{
  brand: "Puma",
  category: "Women shoes",
  imageUrl: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/387027/01/sv01/fnd/PNA/fmt/png/PUMA-x-COCA-COLA-Slipstream-Sneakers",
  size: 8.5,
  price: 25.99,
  description: "Puma Cali: Inspired by West Coast vibes, the Puma Cali offers a laid-back yet trendy aesthetic with a chunky sole and minimalist branding, making it a versatile choice for casual wear",
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
