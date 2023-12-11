// wishlistController.js

const prisma = require('../prisma');

// Add item to wishlist
exports.addToWishlist = async (req, res, next) => {
  try {
    const { userId, itemId } = req.body;

    // Check if the item is already in the wishlist
    const existingWishlistItem = await prisma.wishlist.findUnique({
      where: { userId, itemId },
    });

    if (!existingWishlistItem) {
      // If not, add it to the wishlist
      await prisma.wishlist.create({
        data: {
          userId,
          itemId,
        },
      });

      res.json({ message: 'Item added to wishlist successfully' });
    } else {
      res.status(400).json({ message: 'Item is already in the wishlist' });
    }
  } catch (err) {
    next(err);
  }
};

// Remove item from wishlist
exports.removeFromWishlist = async (req, res, next) => {
  try {
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
};

// Get user's wishlist
exports.getUserWishlist = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    console.log('Fetching wishlist for userId:', userId);

    // Fetch wishlist items for a specific user from the database
    const wishlistItems = await prisma.wishlist.findMany({
      where: {
        userId,
      },
    });

    res.status(200).json({ wishlistItems });
  } catch (err) {
    next(err);
  }
};
