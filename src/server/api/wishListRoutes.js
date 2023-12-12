const express = require('express');
const router = express.Router();
const wishlistController = require('./wishListController');

router.post('/add', wishlistController.addToWishlist);
router.post('/remove', wishlistController.removeFromWishlist);
router.get('/user/:userId', wishlistController.getUserWishlist);

module.exports = router;
