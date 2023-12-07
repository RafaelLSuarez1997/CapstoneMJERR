import React, { createContext, useState } from "react";
import Items from "../items/Items.jsx";
import axios from "axios";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < Items.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [cartCount, setCartCount] = useState(0);

  const handleAddToWishlist = async (currentItem) => {
    try {
      await axios.post('/wishlist/add', { userId: CURRENT_USER_ID, itemId: currentItem.id });
      console.log('Added to Wishlist:', currentItem.id);
    } catch (error) {
      console.error('Error adding to Wishlist:', error);
    }
  };

  const handleRemoveFromWishlist = async (currentItem) => {
    try {
      await axios.post('/wishlist/remove', { userId: CURRENT_USER_ID, itemId: currentItem.id });
      console.log('Removed from Wishlist:', currentItem.id);
    } catch (error) {
      console.error('Error removing from Wishlist:', error);
    }
  };

  const addToCart = (itemId, size) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: { quantity: prev[itemId]?.quantity + 1 || 1, size },
    }));
    setCartCount((prev) => prev + 1);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedCart = {
        ...prev,
        [itemId]: {
          quantity: prev[itemId]?.quantity - 1 || 0,
          size: prev[itemId]?.size,
        },
      };

      // removes the entire item when the quantity reaches 0
      if (updatedCart[itemId].quantity <= 0) {
        delete updatedCart[itemId];
      }

      return updatedCart;
    });

    setCartCount((prev) => Math.max(prev - 1, 0));
  };

  const clearCart = () => {
    setCartItems(getDefaultCart());
    setCartCount(0);
  };

  const contextValue = {
    cartItems,
    cartCount,
    addToCart,
    removeFromCart,
    clearCart,
    handleAddToWishlist,
    handleRemoveFromWishlist,
    // added clear cart to reset order placement
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
