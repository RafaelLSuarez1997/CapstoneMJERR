import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';
import { useGetItemQuery, useDeleteItemMutation } from '../items/itemSlice';

function CartItem({ itemId, quantity, size }) {
  const { removeFromCart } = useContext(ShopContext);
  const { data: item, isLoading } = useGetItemQuery(itemId);

  if (isLoading) {
    return <p>Loading . . .</p>;
  }

  if (!item) {
    return <p>Item not found</p>;
  }

  const onDelete = () => {
    removeFromCart(itemId);
  };

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
        <button onClick={onDelete}>Remove from Cart</button>
      </div>
    </li>
  );
}

function Cart() {
  const { cartItems } = useContext(ShopContext);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {Object.entries(cartItems).map(([itemId, { quantity, size }]) => (
          <CartItem key={itemId} itemId={itemId} quantity={quantity} size={size} />
        ))}
      </ul>
    </div>
  );
}

export default Cart;
