
const express = require('express');
const router = express.Router();
const wishlistController = require('../api/wishListController');

router.post('/wishlist/add', wishlistController.addToWishlist);
router.post('/wishlist/remove', wishlistController.removeFromWishlist);
router.get('/wishlist/user/:userId', wishlistController.getUserWishlist);

module.exports = router;
        