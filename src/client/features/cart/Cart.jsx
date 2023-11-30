import React, { useContext } from 'react';
import { ShopContext } from '../cart/ShopContext';

function Cart() {
  const { cartItems } = useContext(ShopContext);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {Object.entries(cartItems).map(([itemId, quantity]) => (
          <li key={itemId}>
            Item ID: {itemId}, Quantity: {quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;