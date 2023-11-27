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

    const item = await prisma.item.findUnique({ where: { id } });
    res.json(item);
  } catch (err) {
    next(err);
  }
});
