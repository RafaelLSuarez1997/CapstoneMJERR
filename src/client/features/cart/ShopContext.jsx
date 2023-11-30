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
  
    const addToCart = (itemId, size) => {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: {
          quantity: prev[itemId] ? prev[itemId].quantity + 1 : 1,
          size: size,
        },
      }));
    };

    const removeFromCart = (itemId) => {
        setCartItems ((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    };

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
    }

    console.log(cartItems)

    return <ShopContext.Provider value={contextValue}>
        {props.children}
        </ShopContext.Provider>;
};