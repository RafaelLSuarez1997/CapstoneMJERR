// controllers/wishlistController.js

const prisma = require('../prisma'); // Update the path

const addToWishlist = async (req, res, next) => {
  try {
    const { userId, itemId } = req.body;
    const wishlistItem = await prisma.wishlist.create({
      data: {
        userId,
        itemId,
      },
    });
    res.json(wishlistItem);
  } catch (error) {
    next(error);
  }
};

const removeFromWishlist = async (req, res, next) => {
  try {
    const { userId, itemId } = req.body;
    await prisma.wishlist.deleteMany({
      where: {
        userId,
        itemId,
      },
    });
    res.json({ message: 'Item removed from wishlist successfully' });
  } catch (error) {
    next(error);
  }
};

const getUserWishlist = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const wishlistItems = await prisma.wishlist.findMany({
      where: {
        userId,
      },
      include: {
        item: true,
      },
    });
    res.json(wishlistItems);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  addToWishlist,
  removeFromWishlist,
  getUserWishlist,
};
