const prisma = require('../prisma');
const seed = async () => {
  const item1 = await prisma.items.create({
    data: {
      brand: 'Nike',
      category: 'Casual Sneakers',
      imageUrl:'https://images.stockx.com/360/Nike-Dunk-Low-Photon-Dust-W/Images/Nike-Dunk-Low-Photon-Dust-W/Lv2/img01.jpg?fm=webp&auto=compress&w=480&dpr=1&updated_at=1635256235&h=320&q=57',
      size: 4.0,
      price: 129.99,
      description:'The Nike Dunk Low Photon Dust (W) is made of white leather with Photon Dust leather overlays and Swooshes. A woven Nike label on the tongue and embroidered Nike branding completes the design.'
    }
  });
  const item2 = await prisma.items.create({
    data: {
      brand: 'Adidas',
      category: 'Running Sneakers',
      imageUrl:'https://images.stockx.com/360/adidas-Campus-00s-Core-Black/Images/adidas-Campus-00s-Core-Black/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=2&updated_at=1681284184&h=384&q=60',
      size: 4.0,
      price: 99.99,
      description:'The adidas Campus 00s Core Black is covered in core black and white colorways at the upper, footwear white midsole, and brown outsole. This sneaker is a product of suede, rubber, and leather materials that completes the texture. The adidas Campus 00s Core Black features the adidas logo on the tongue and the heel with campus branding at its quarter.'
    }
  });
  const item3 = await prisma.items.create({
    data: {
      brand: 'Puma',
      category: 'Running Sneakers',
      imageUrl:'https://images.stockx.com/360/Puma-LaMelo-Ball-MB01-Lo-Green-Gecko/Images/Puma-LaMelo-Ball-MB01-Lo-Green-Gecko/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=2&updated_at=1665386437&h=384&q=60',
      size: 4.0,
      price: 79.99,
      description:'The upper of this collaborative shoe is made from synthetic materials featuring a 3D printed design throughout. The laces are made of green cotton with an underlying tongue made of mesh. This upper displays a circular leaves motif, near the collar, forming a crown and the rubber outsole has a thin linear pattern for traction.'
    },
  });
  const item4 = await prisma.items.create({
    data: {
        brand: 'Converse',
        category: 'Casual Sneakers',
        imageUrl:'https://images.stockx.com/360/Converse-Chuck-Taylor-All-Star-Hi-Platform-Black-White-W/Images/Converse-Chuck-Taylor-All-Star-Hi-Platform-Black-White-W/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=2&updated_at=1690183371&h=384&q=60',
        size: 4.0,
        price: 59.99,
        description:'The Converse Chuck Taylor All Star Hi Platform Black White W is a classic sneaker with a modern twist. The platform sole adds height and a trendy touch to the iconic Chuck Taylor silhouette. The upper is made of durable canvas material in a sleek black and white colorway, making it versatile and easy to style with any outfit.'
    },
  });
  const item5 = await prisma.items.create({
      data: {
        brand: 'NewBalance',
        category: 'Running Sneakers',
        imageUrl:'https://images.stockx.com/360/New-Balance-2002R-Protection-Pack-Light-Arctic-Grey-Purple/Images/New-Balance-2002R-Protection-Pack-Light-Arctic-Grey-Purple/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=2&updated_at=1660749592&h=384&q=60',
        size: 4.0,
        price: 89.99,
        description:'Designed by a team led by Yue Wu, this shoe features an upper with a breathable mesh base, light arctic gray and purple suede overlays, and purple New Balance branding. This upper rests on a slightly yellow midsole with NERGY cushioning for improved comfort. Underfoot, it features traction patterns that enhance its grip.'
    },
  });
  const item6 = await prisma.items.create({
    data: {
      brand: 'Reebok',
      category: 'Fitness shoes',
      imageUrl:'https://images.stockx.com/360/Reebok-Club-C-85-Chalk-Alabaster-Maroon/Images/Reebok-Club-C-85-Chalk-Alabaster-Maroon/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=2&updated_at=1690468037&h=384&q=60',
      size: 4.0,
      price: 69.99,
      description:'Designed for your active lifestyle, Reebok fitness shoes offer a perfect blend of style and functionality. The lightweight design and flexible sole make them ideal for workouts and casual wear alike.'
    }
  });
  
  const item7 = await prisma.items.create({
    data: {
      brand: 'Nike',
      category: 'Casual Sneakers',
      imageUrl:'https://images.stockx.com/images/Nike-Vomero-5-Sail-Light-Orewood-Brown-Womens.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=webp&auto=compress&dpr=1&trim=color&updated_at=1688725978&q=57',
      size: 4.0,
      price: 99.99,
      description:'Introducing the latest innovation in walking comfort, the Nike StrideMax Walk. Designed with a perfect blend of style and functionality, these walking shoes are crafted to enhance your every step with cutting-edge technology and sleek aesthetics.'
    }
  });
  
  const item8 = await prisma.items.create({
    data: {
      brand: 'Adidas',
      category: 'Fitness Sneakers',
      imageUrl:'https://images.stockx.com/360/adidas-Campus-Bad-Bunny-Cream/Images/adidas-Campus-Bad-Bunny-Cream/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=2&updated_at=1677252256&h=384&q=60',
      size: 4.0,
      price: 79.99,
      description:'Traction is a top priority, and the outsole of the WalkBoost Prime delivers on all fronts. Designed with a durable rubber compound and a carefully engineered tread pattern, these shoes offer exceptional grip on a variety of surfaces.'
    }
  });
  
  const item9 = await prisma.items.create({
    data: {
      brand: 'Converse',
      category: 'Casual Sneakers',
      imageUrl:'https://images.stockx.com/360/Converse-Chuck-Taylor-All-Star-70s-Ox-Comme-des-Garcons-PLAY-White/Images/Converse-Chuck-Taylor-All-Star-70s-Ox-Comme-des-Garcons-PLAY-White/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=2&updated_at=1634932711&h=384&q=60',
      size: 4.0,
      price: 39.99,
      description:"Introducing the Converse WalkStar Classic, a timeless blend of iconic style and everyday comfort. Born from the heritage of the legendary Chuck Taylor All Star, these walking shoes embody Converse's legacy of cool, now optimized for your daily walking adventures."
    }
  });
  
  const item10 = await prisma.items.create({
    data: {
      brand: 'Nike',
      category: 'Running Sneakers',
      imageUrl:'https://images.stockx.com/360/Nike-Air-Max-Plus-Patta-FC-Barcelona/Images/Nike-Air-Max-Plus-Patta-FC-Barcelona/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=1&updated_at=1697729112&h=384&q=57',
      size: 4.0,
      price: 59.99,
      description:"Traction is key when it comes to a reliable walking shoe, and the outsole of the StrideMax Walk doesn't disappoint. Featuring a durable rubber compound with a multidirectional tread pattern, these shoes offer exceptional grip on various surfaces, ensuring stability and confidence in each step."
    }
  });
  
  const item11 = await prisma.items.create({
    data: {
      brand: 'Adidas',
      category: 'Casual Sneakers',
      imageUrl:'https://images.stockx.com/images/adidas-Campus-Dark-Blue.jpg?fit=fill&bg=FFFFFF&w=576&h=384&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1606938211&q=60',
      size: 4.0,
      price: 45.99,
      description:'Adidas Superstar: The classic Adidas Superstar, known for its shell toe and three stripes, combines streetwear flair with timeless design, making it a go-to choice for casual fashion.'
    }
  });
  
  const item12 = await prisma.items.create({
    data: {
      brand: 'Jordan',
      category: 'Casual Sneakers',
      imageUrl:'https://images.stockx.com/360/Air-Jordan-4-Retro-Red-Cement/Images/Air-Jordan-4-Retro-Red-Cement/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=2&updated_at=1691770728&h=384&q=60',
      size: 4.0,
      price: 99.99,
      description:'Jordan 4 Retro: Known for its distinctive mesh paneling and visible Air cushioning unit, the Jordan 4 Retro is a streetwear staple that effortlessly combines retro aesthetics with modern comfort.'
    }
  });
  
  const item13 = await prisma.items.create({
    data: {
      brand: 'Nike',
      category: 'Running Sneakers',
      imageUrl:'https://images.stockx.com/360/Nike-Air-Zoom-GT-Cut-2-Black-Phantom-Orange/Images/Nike-Air-Zoom-GT-Cut-2-Black-Phantom-Orange/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=2&updated_at=1680207754&h=384&q=60',
      size: 4.0,
      price: 45.99,
      description:"Nike Blazer Mid '77: The Nike Blazer Mid '77 pays homage to vintage basketball style, featuring a leather upper, oversized Swoosh, and a retro design that effortlessly transitions from the court to the streets."
    }
  });
  
  const item14 = await prisma.items.create({
    data: {
      brand: 'Converse',
      category: 'Fitness Sneakers',
      imageUrl:'https://images.stockx.com/360/Converse-Chuck-Taylor-All-Star-70-Hi-Comme-des-Garcons-PLAY-Multi-Heart-Black/Images/Converse-Chuck-Taylor-All-Star-70-Hi-Comme-des-Garcons-PLAY-Multi-Heart-Black/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=2&updated_at=1701170447&h=384&q=60',
      size: 4.0,
      price: 35.99,
      description:'Converse One Star: The Converse One Star exudes skate culture cool, featuring a low-top profile, suede upper, and the distinctive single star emblem, capturing the essence of street-style authenticity.'
    }
  });
  
  const item15 = await prisma.items.create({
    data: {
      brand: 'Adidas',
      category: 'Fitness Sneakers',
      imageUrl:'https://images.stockx.com/360/adidas-Forum-Low-White-Black/Images/adidas-Forum-Low-White-Black/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=2&updated_at=1671722563&h=384&q=60',
      size: 4.0,
      price: 39.99,
      description:'Adidas NMD R1: The Adidas NMD R1 blends urban style with advanced cushioning technology, featuring a sock-like Primeknit upper and distinctive midsole plugs for a modern and functional look.'
    }
  });
  const item16 = await prisma.items.create({
    data: {
      brand: 'Skechers',
      category: 'Casual Sneakers',
      imageUrl:'https://images.stockx.com/360/Doja-Cat-Skechers-Dlites-White/Images/Doja-Cat-Skechers-Dlites-White/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=2&updated_at=1695050584&h=384&q=60',
      size: 4.0,
      price: 49.99,
      description:"The Skechers D'Lites series is a blend of comfort and retro-chic style, featuring a chunky sole and vibrant color accents, making it a go-to choice for those seeking a playful and comfortable everyday sneaker."
    }
  });
  
  const item17 = await prisma.items.create({
    data: {
      brand: 'Nike',
      category: 'Running Sneakers',
      imageUrl:'https://images.stockx.com/360/Nike-Air-Max-Penny-1-Orlando-2022/Images/Nike-Air-Max-Penny-1-Orlando-2022/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=2&updated_at=1656941162&h=384&q=60',
      size: 4.0,
      price: 55.99,
      description:"Nike Blazer Mid '77: The Nike Blazer Mid '77 pays homage to vintage basketball style, featuring a leather upper, oversized Swoosh, and a retro design that effortlessly transitions from the court to the streets."
    }
  });
  
  const item18 = await prisma.items.create({
    data: {
      brand: 'Converse',
      category: 'Walking Sneakers',
      imageUrl:'https://images.stockx.com/360/Converse-Chuck-Taylor-All-Star-70-Hi-Plus-Canvas-Black-White/Images/Converse-Chuck-Taylor-All-Star-70-Hi-Plus-Canvas-Black-White/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=2&updated_at=1675412475&h=384&q=60',
      size: 4.0,
      price: 69.99,
      description:'Converse Chuck 70: An upgraded version of the classic Chuck Taylor, the Chuck 70 features enhanced comfort and durability, maintaining the iconic silhouette while offering a premium feel.'
    }
  });
  
  const item19 = await prisma.items.create({
    data: {
      brand: 'NewBalance',
      category: 'Casual Sneakers',
      imageUrl:'https://images.stockx.com/360/New-Balance-550-White-Green/Images/New-Balance-550-White-Green/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=2&updated_at=1635799416&h=384&q=60',
      size: 4.0,
      price: 59.99,
      description:'New Balance 990: The New Balance 990 is an enduring symbol of craftsmanship and comfort, known for its premium suede and mesh upper, supportive midsole, and iconic N logo, making it a classic choice for those who appreciate both style and functionality.'
    }
  });
  
  const item20 = await prisma.items.create({
    data: {
      brand: 'Puma',
      category: 'Running Sneakers',
      imageUrl:'https://images.stockx.com/360/Puma-LaMelo-Ball-MB01-Lo-Black-White/Images/Puma-LaMelo-Ball-MB01-Lo-Black-White/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=2&updated_at=1668014578&h=384&q=60',
      size: 4.0,
      price: 30.99,
      description:'The upper of the Adidas WalkBoost Prime is crafted from a breathable and flexible knit material, providing optimal ventilation to keep your feet cool and comfortable during your walks. The sock-like construction ensures a snug and adaptive fit, wrapping your feet in a supportive embrace.'
    }
  });
  
  const item21 = await prisma.items.create({
    data: {
      brand: 'Puma',
      category: 'Casual Sneakers',
      imageUrl:'https://images.stockx.com/360/Puma-Suede-Rhuigi-B-Boy/Images/Puma-Suede-Rhuigi-B-Boy/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=2&updated_at=1684225245&h=384&q=60',
      size: 4.0,
      price: 25.99,
      description:'Puma Cali: Inspired by West Coast vibes, the Puma Cali offers a laid-back yet trendy aesthetic with a chunky sole and minimalist branding, making it a versatile choice for casual wear'
    }
  });
  
  const item23 = await prisma.items.create({
    data: {
      brand: 'Adidas',
      category: 'Astro',
      imageUrl:'https://media-photos.depop.com/b1/10689240/1447849973_a477f6518f3545bdad88da7ace7a64d5/P0.jpg',
      size: 4.0,
      price: 500.00,
      description:'CLEUS Astro Boy Big Red Boots'
    }
  });
  const item24 = await prisma.items.create({
    data: {
      brand: 'Puma',
      category: 'Walking Sneakers',
      imageUrl:'https://images.stockx.com/360/Puma-Suede-Rhuigi-Villasenor/Images/Puma-Suede-Rhuigi-Villasenor/Lv2/img01.jpg?fm=webp&auto=compress&w=480&dpr=2&updated_at=1682522699&h=320&q=60',
      size: 4.0,
      price: 200.00,
      description:'The Puma Suede Rhuigi Villasenor is a collaboration between Puma and LA-based designer Rhuigi Villasenor. This sneaker features a premium suede upper in a bold red colorway with contrasting white accents on the Puma Formstrip and midsole. The shoe also includes a gold Puma logo on the heel and Rhuigi Villasenor branding on the tongue and insole.'
    }
  });
  const item25 = await prisma.items.create({
    data: {
      brand: 'Puma',
      category: 'Running shoes',
      imageUrl:'https://images.stockx.com/360/Puma-LaMelo-Ball-MB03-Toxic/Images/Puma-LaMelo-Ball-MB03-Toxic/Lv2/img01.jpg?fm=webp&auto=compress&w=480&dpr=2&updated_at=1699460747&h=320&q=60',
      size: 4.0,
      price: 200.00,
      description:'LaMelo Ball’s third signature shoe MB.03 takes a trip to the never before seen alternative universe that is the Melo world. Highlighted by slime inspired rubber wrap-ups and an engineered knit upper with scratch cutouts, the MB.03 is truly Not From Here.'
    }
  });
  const item26 = await prisma.items.create({
    data: {
      brand: 'Converse',
      category: 'Walking Shoes',
      imageUrl:'https://images.stockx.com/360/Converse-Run-Star-Motion-Black-White-Gum/Images/Converse-Run-Star-Motion-Black-White-Gum/Lv2/img01.jpg?fm=webp&auto=compress&w=480&dpr=2&updated_at=1635274730&h=320&q=60',
      size: 4.0,
      price: 95.00,
      description:'This high-top sneaker features a black canvas upper with a reinforced toe cap. Other upper details include the circle All-Star logo patch on the medial ankle, a CX foam insole, White stitching, branded tongue, a heel pull tab, silver metallic eyelets, and white Laces. The highlight of this sneaker is a chunky and wavy sole unit made up of a lightweight Phylon midsole dressed in white and lugged outsole with gum on the forefoot and black rubber at the heel.'
    }
  });
  // const item = await prisma.items.create({
  //   data: {
  //     brand: '',
  //     category: '',
  //     imageUrl:'',
  //     size: 4.0,
  //     price: 200.00,
  //     description:''
  //   }
  // });
  // const item = await prisma.items.create({
  //   data: {
  //     brand: '',
  //     category: '',
  //     imageUrl:'',
  //     size: 4.0,
  //     price: 200.00,
  //     description:''
  //   }
  // });
  // const item = await prisma.items.create({
  //   data: {
  //     brand: '',
  //     category: '',
  //     imageUrl:'',
  //     size: 4.0,
  //     price: 200.00,
  //     description:''
  //   }
  // });
  


  const user1 = await prisma.user.create({
    data: {
      username: 'jose',
      password: 'password1',
      cart: {
        create: {
          items: {
            create: [
              { productId: item1.id, quantity: 1, size: item1.size },
              { productId: item2.id, quantity: 1, size: item2.size }
            ]
          }
        }
      }
    },
    include: {
      cart: {
        include: {
          items: true
        }
      }
    }
  });
  const user2 = await prisma.user.create({
    data: {
      username: 'adam',
      password: 'password2',
      cart: {
        create: {
          items: {
            create: [{ productId: item1.id, quantity: 1, size: item1.size }]
          }
        }
      }
    },
    include: {
      cart: {
        include: {
          items: true
        }
      }
    }
  });

  console.log('Seeding completed');
};

seed()
  .catch(error => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

