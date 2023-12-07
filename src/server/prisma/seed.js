const prisma = require('../prisma');
const seed = async () => {
  const item1 = await prisma.items.create({
    data: {
      brand: 'Nike',
      category: 'Casual Sneakers',
      imageUrl:
        'https://images.stockx.com/360/Nike-Dunk-Low-Photon-Dust-W/Images/Nike-Dunk-Low-Photon-Dust-W/Lv2/img01.jpg?fm=webp&auto=compress&w=480&dpr=1&updated_at=1635256235&h=320&q=57',
      size: 9.5,
      price: 129.99,
      description:
        'The Nike Dunk Low Photon Dust (W) is made of white leather with Photon Dust leather overlays and Swooshes. A woven Nike label on the tongue and embroidered Nike branding completes the design.'
    }
  });
  const item2 = await prisma.items.create({
    data: {
      brand: 'Adidas',
      category: 'Running Sneakers',
      imageUrl:
        'https://images.stockx.com/360/adidas-Campus-00s-Core-Black/Images/adidas-Campus-00s-Core-Black/Lv2/img01.jpg?fm=webp&auto=compress&w=576&dpr=2&updated_at=1681284184&h=384&q=60',
      size: 8.0,
      price: 99.99,
      description:
        'The adidas Campus 00s Core Black is covered in core black and white colorways at the upper, footwear white midsole, and brown outsole. This sneaker is a product of suede, rubber, and leather materials that completes the texture. The adidas Campus 00s Core Black features the adidas logo on the tongue and the heel with campus branding at its quarter.'
    }
  });
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