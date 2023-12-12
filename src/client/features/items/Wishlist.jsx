import React, { useContext, useEffect } from "react";
import { ShopContext } from "../cart/ShopContext";

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useContext(ShopContext);

  // Use useEffect to log the wishlistItems whenever it changes
  useEffect(() => {
    console.log("Wishlist Items:", wishlistItems);
  }, [wishlistItems]);

  // Check if wishlistItems is an array before mapping
  const renderWishlistItems = () => {
    if (Array.isArray(wishlistItems)) {
      return wishlistItems.map(item => (
        <li key={item.id}>
          <p>Item ID: {item.id}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Size: {item.size}</p>
          <button onClick={() => removeFromWishlist(item.id)}>Remove from Wishlist</button>
        </li>
      ));
    } else {
      return <p>Your wishlist is empty.</p>;
    }
  };

  return (
    <div>
      <h1>Wishlist</h1>
      <ul>
        {renderWishlistItems()}
      </ul>
    </div>
  );
};

export default Wishlist;
