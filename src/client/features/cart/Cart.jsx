import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';
import { useGetItemQuery, useDeleteItemMutation } from '../items/itemSlice';
import { Link } from 'react-router-dom';
import './Cart.css';



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
        <p>Price: ${item.price}</p>
        <br/>
        <button onClick={onDelete}>Remove from Cart</button>
      </div>
    </li>
  );
}
function Cart() {
  const { cartItems } = useContext(ShopContext);
  const calculateTotalAmount = () => {
    let totalAmount = 0;
  
    Object.entries(cartItems).forEach(([itemId, { quantity }]) => {
      const { data: item, isLoading } = useGetItemQuery(itemId);
  
      if (!isLoading && item) {
        totalAmount += item.price * quantity;
      }
    });
    return totalAmount;
  }


  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {Object.entries(cartItems).map(([itemId, { quantity, size }]) => (
          <CartItem key={itemId} itemId={itemId} quantity={quantity} size={size} />
        ))}
      </ul>
      <br/>
      <p>Total Amount: ${calculateTotalAmount()} </p>
      <br/>
      <Link to ="/">
        <button>Continue Shopping</button>
      </Link>
      
    </div>
  );
}
export default Cart;