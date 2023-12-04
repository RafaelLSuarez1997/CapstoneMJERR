import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';  // Import axios
import { ShopContext } from './ShopContext';
import { useGetItemQuery } from '../items/itemSlice';
import { Link } from 'react-router-dom';
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
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const calculateTotalAmount = async () => {
      let calculatedTotalAmount = 0;
      for (const [itemId, { quantity }] of Object.entries(cartItems)) {
        try {
          // Fetch item details using axios DOWNLOAD AXIOS
          const response = await axios.get(`/api/items/${itemId}`);
          const item = response.data;
          calculatedTotalAmount += item.price * quantity;
        } catch (error) {
          console.error(`Error fetching item details for itemId ${itemId}:`, error);
        }
      }
      setTotalPrice(calculatedTotalAmount);
    };
    calculateTotalAmount();
  }, [cartItems]);
  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {Object.entries(cartItems).map(([itemId, { quantity, size }]) => (
          <CartItem key={itemId} itemId={itemId} quantity={quantity} size={size} />
        ))}
      </ul>
      <br/>
      <p>Total Amount: ${totalPrice.toFixed(2)} </p>
      <br/>
      <Link to ="/">
        <button>Continue Shopping</button>
      </Link>
      <Link to ="/checkout">
        <button>Proceed to Checkout</button>
      </Link>
    </div>
  );
}
export default Cart;