const prisma = require("../prisma");
const mockdata = [
  {
    "brand": "Nike",
    "category": "Mens shoes",
    "size": 7.5
  },
  {
    "brand": "Adidas",
    "category": "Women shoes",
    "size": 6
  },
  {
    "brand": "Puma",
    "category": "Mens shoes",
    "size": 9
  },
  {
    "brand": "Reebok",
    "category": "Women shoes",
    "size": 8.5
  },
  {
    "brand": "New Balance",
    "category": "Mens shoes",
    "size": 10
  },
  {
    "brand": "Under Armour",
    "category": "Women shoes",
    "size": 7
  },
  {
    "brand": "ASICS",
    "category": "Mens shoes",
    "size": 8
  },
  {
    "brand": "Skechers",
    "category": "Women shoes",
    "size": 9.5
  },
  {
    "brand": "Vans",
    "category": "Mens shoes",
    "size": 11
  },
  {
    "brand": "Converse",
    "category": "Women shoes",
    "size": 7.5
  },
  {
    "brand": "Brooks",
    "category": "Mens shoes",
    "size": 9.5
  },
  {
    "brand": "Fila",
    "category": "Women shoes",
    "size": 8
  }
  
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
