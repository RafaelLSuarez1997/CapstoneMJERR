import React, { useState, useContext, useEffect } from "react"; // Import useEffect
import { ShopContext } from "../cart/ShopContext";

const Wishlist = () => {
  const { cartItems, addToWishlist, removeFromWishlist } = useContext(ShopContext);
  const [wishlistItems, setWishlistItems] = useState({});

  // Copy cart items to the wishlist
  const syncWishlist = () => {
    setWishlistItems({ ...cartItems });
  };

  // Add an item to the wishlist
  const addToWishlistHandler = (itemId) => {
    addToWishlist(itemId);
    syncWishlist();
  };

  // Remove an item from the wishlist
  const removeFromWishlistHandler = (itemId) => {
    removeFromWishlist(itemId);
    syncWishlist();
  };

  // Use useEffect to log the wishlistItems whenever it changes
  useEffect(() => {
    console.log("Wishlist Items:", wishlistItems);
  }, [wishlistItems]);

  return (
    <div>
      <h1>Wishlist</h1>
      <ul>
        {Object.entries(wishlistItems).map(([itemId, { quantity, size }]) => (
          <li key={itemId}>
            <p>Item ID: {itemId}</p>
            <p>Quantity: {quantity}</p>
            <p>Size: {size}</p>
            <button onClick={() => removeFromWishlistHandler(itemId)}>Remove from Wishlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Wishlist;
