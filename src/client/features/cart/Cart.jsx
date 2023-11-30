import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';
import { useGetItemQuery, useDeleteItemMutation } from '../items/itemSlice';


function Cart() {
  const { cartItems, removeFromCart } = useContext(ShopContext);
  
  const onDelete = async (itemId) => {
   removeFromCart(itemId)
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {Object.entries(cartItems).map(([itemId, { quantity, size }]) => {
          const { data: item, isLoading } = useGetItemQuery(itemId);

          if (isLoading) {
            return <p>Loading . . .</p>;
          }

          if (!item) {
            return <p>Item not found</p>;
          }

          return (
            <li key={itemId}>
              <img
                className="item-cart"
                src={item.imageUrl}
                alt={item.brand}
                style={{ width: '100px', height: '100px' }}
              />
              <div>
                <p>Item ID: {itemId}</p>
                <p>Brand: {item.brand}</p>
                <p>Size: {size}</p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => onDelete(itemId)}>Remove from Cart</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cart;