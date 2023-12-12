const prisma = require('../prisma');

exports.addToWishlist = async (req, res, next) => {
  try {
    const { userId, itemId } = req.body;
    const existingWishlistItem = await prisma.wishlist.findUnique({
      where: { userId, itemId },
    });

    if (existingWishlistItem) {
      return res.status(400).json({ message: 'Item is already in the wishlist' });
    }

    await prisma.wishlist.create({ data: { userId, itemId } });
    res.json({ message: 'Item added to wishlist successfully' });
  } catch (err) {
    console.error('Error in addToWishlist:', err);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
};

exports.removeFromWishlist = async (req, res, next) => {
  try {
    const { userId, itemId } = req.body;
    await prisma.wishlist.deleteMany({ where: { userId, itemId } });
    res.json({ message: 'Item removed from wishlist successfully' });
  } catch (err) {
    console.error('Error in removeFromWishlist:', err);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
};

exports.getUserWishlist = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const wishlistItems = await prisma.wishlist.findMany({ where: { userId } });
    res.json({ wishlistItems });
  } catch (err) {
    console.error('Error in getUserWishlist:', err);
    res.status(500).json({ error: 'Internal Server Error', details: err.message });
  }
};
