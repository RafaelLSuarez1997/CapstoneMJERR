import React, { createContext, useState } from "react";
import Items from "../items/Items.jsx";

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
    const [cartCount, setCartCount] = useState(0)
  
    const addToCart = (itemId, size) => {
        setCartItems((prev) => ({ ...prev, [itemId]: { quantity: prev[itemId]?.quantity + 1 || 1, size } }));
        setCartCount((prev) => prev + 1);
      };
    
      const removeFromCart = (itemId) => {
        setCartItems((prev) => {
          const updatedCart = { ...prev, [itemId]: { quantity: prev[itemId]?.quantity - 1 || 0, size: prev[itemId]?.size } };
    
          // removes entire item when quantity reaches 0
          if (updatedCart[itemId].quantity <= 0) {
            delete updatedCart[itemId];
          }
    
          return updatedCart;
        });
    
        setCartCount((prev) => Math.max(prev - 1, 0));
      };

    const contextValue = {
        cartItems,
        cartCount,
        addToCart,
        removeFromCart,
    }

    console.log(cartItems)

    return <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>;
};