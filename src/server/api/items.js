const { ServerError } = require("../errors");
const prisma = require("../prisma");

const router = require("express").Router();
module.exports = router;

// Send all shoes
router.get("/", async (req, res, next) => {
  try {
    const items = await prisma.items.findMany();
    res.json(items);
  } catch (err) {
    next(err);
  }
});

// Get shoes by their id
router.get("/id/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;

    const item = await prisma.items.findUnique({ where: { id } });
    res.json(item);
  } catch (err) {
    next(err);
  }
});

// Contact route
router.post("/contact", async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    // Your logic to handle the contact form goes here

    res.send("Thank you for your message! We'll be in touch soon.");
  } catch (err) {
    next(err);
  }
});

// Get items by brand
router.get("/brand/:brand", async (req, res, next) => {
  try {
    const brand = req.params.brand;

    const items = await prisma.items.findMany({ where: { brand } });
    res.json(items);
  } catch (err) {
    next(err);
  }
});

// Wishlist routes

// Render wishlist page
router.get("/wishlist", async (req, res, next) => {
  try {
    // Your logic to render the wishlist page goes here
    // For example, fetch wishlist items from the database
    const wishlistItems = await prisma.wishlist.findMany();

    // Render the wishlist page using your view engine
    res.render('wishlist', { wishlistItems });
  } catch (err) {
    next(err);
  }
});

// Add item to wishlist
router.post("/wishlist/add", async (req, res, next) => {
  try {
    // Your logic to add items to the wishlist goes here
    const { userId, itemId } = req.body;

    // Add the item to the wishlist in the database
    await prisma.wishlist.create({
      data: {
        userId,
        itemId,
      },
    });

    res.json({ message: 'Item added to wishlist successfully' });
  } catch (err) {
    next(err);
  }
});

// Remove item from wishlist
router.post("/wishlist/remove", async (req, res, next) => {
  try {
    // Your logic to remove items from the wishlist goes here
    const { userId, itemId } = req.body;

    // Remove the item from the wishlist in the database
    await prisma.wishlist.deleteMany({
      where: {
        userId,
        itemId,
      },
    });

    res.json({ message: 'Item removed from wishlist successfully' });
  } catch (err) {
    next(err);
  }
});

// Get user's wishlist
router.get("/wishlist/user/:userId", async (req, res, next) => {
  try {
    // Your logic to get the user's wishlist goes here
    const userId = req.params.userId;

    // For example, fetch wishlist items for a specific user from the database
    const wishlistItems = await prisma.wishlist.findMany({
      where: {
        userId,
      },
    });

    res.status(200).json({ wishlistItems });
  } catch (err) {
    next(err);
  }
});
