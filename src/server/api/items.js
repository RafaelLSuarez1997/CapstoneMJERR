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
router.get("/id/:id", async (req, res, next) => {
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