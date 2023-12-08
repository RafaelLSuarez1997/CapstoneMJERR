const { ServerError } = require("../errors");
const prisma = require("../prisma");
const router = require("express").Router();

module.exports = router;

// Get all items
router.get("/", async (req, res, next) => {
  try {
    const items = await prisma.items.findMany();
    res.json(items);
  } catch (err) {
    next(err);
  }
});

// Get a specific item by ID
router.get("/:id", async (req, res, next) => {
  try {
    const itemId = +req.params.id;
    const item = await prisma.items.findUnique({
      where: {
        id: itemId,
      },
    });

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    res.json(item);
  } catch (err) {
    next(err);
  }
});

// Add an item to the shopping cart
router.post("/cart/add/:itemId", async (req, res, next) => {
  try {
    const itemId = +req.params.itemId;
    const { quantity } = req.body;

    const item = await prisma.item.findUnique({
      where: {
        id: itemId,
      },
    });

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    // Assuming you have a 'cart' model/table in your database
    const cartItem = await prisma.cart.create({
      data: {
        itemId,
        quantity,
      },
    });

    res.status(201).json(cartItem);
  } catch (err) {
    next(err);
  }
});

// Update the quantity of an item in the shopping cart
router.put("/cart/update/:cartItemId", async (req, res, next) => {
  try {
    const cartItemId = +req.params.cartItemId;
    const { quantity } = req.body;

    // Assuming you have a 'cart' model/table in your database
    const updatedCartItem = await prisma.cart.update({
      where: {
        id: cartItemId,
      },
      data: {
        quantity,
      },
    });

    res.json(updatedCartItem);
  } catch (err) {
    next(err);
  }
});

// Remove an item from the shopping cart
router.delete("/cart/remove/:cartItemId", async (req, res, next) => {
  try {
    const cartItemId = +req.params.cartItemId;

    // Assuming you have a 'cart' model/table in your database
    await prisma.cart.delete({
      where: {
        id: cartItemId,
      },
    });

    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

// Contact route
router.post("/contact", async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    // Your contact logic here

    res.status(201).json({ message: "Thank you for your message! We'll be in touch soon." });
  } catch (err) {
    next(err);
  }
});



// get by brand
router.get("/:brand", async (req, res, next) => {
  try {
    const brand = req.params.brand;

    const itemsByBrand = await prisma.items.findMany({
      where: { brand: brand },
    });

    res.json(itemsByBrand);
  } catch (err) {
    next(err);
  }
});
