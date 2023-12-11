const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

//Send all shoes
router.get("/", async (req, res, next) => {
    try {
      const items = await prisma.items.findMany();
      res.json(items);
    } catch (err) {
      next(err);
    }
});

// Get shoes by their id
router.get("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const item = await prisma.items.findUnique({ where: { id } });
    res.json(item);
  } catch (err) {
    next(err);
  }
});

// contact route
router.post("/contact", async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    res.send("Thank you for your message! We'll be in touch soon.")
  } catch (err) {
    next(err);
  }
});

// get by brand
router.get("/brand/:brand", async (req, res, next) => {
  try {
    const brand = req.params.brand;

    const items = await prisma.items.findMany({ where: { brand } });
    res.json(items);
  } catch (err) {
    next(err);
  }
});

// Get user's cart
router.get("/cart/:userId", async (req, res, next) => {
  try {
    const userId = +req.params.userId;

    // Fetch the user with their cart and associated items
    const userWithCart = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        cart: {
          include: {
            items: true,
          },
        },
      },
    });

    if (!userWithCart) {
      // If the user is not found, return an error
      throw new ServerError(404, "User not found");
    }

    res.json(userWithCart.cart);
  } catch (err) {
    next(err);
  }
});