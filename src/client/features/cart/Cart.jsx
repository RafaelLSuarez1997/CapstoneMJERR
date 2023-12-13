import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ShopContext } from './ShopContext';
import { useGetItemQuery } from '../items/itemSlice';
import { Link, useNavigate } from 'react-router-dom';
import './Cart.less';
import { selectToken } from '../auth/authSlice';
import { useSelector } from 'react-redux';
import Navbar from "../../layout/Navbar";
import ShopCartItems from './CartItems';

function CartItem({ itemId, quantity, size, updateTotalPrice }) {
  const { removeFromCart } = useContext(ShopContext);
  const { data: item, isLoading } = useGetItemQuery(itemId);
  const [currentQuantity, setCurrentQuantity] = useState(quantity);
  const [totalItemQuantity, setTotalItemQuantity] = useState(quantity);

  useEffect(() => {
    setTotalItemQuantity(quantity);
  }, [quantity]);

  if (isLoading) {
    return <p>Loading . . .</p>;
  }

  if (!item) {
    return <p>Item not found</p>;
  }

  const onDelete = () => {
    removeFromCart(itemId);
  };

  const increaseQuantity = () => {
    console.log('Increasing quantity...');
    if (currentQuantity < 10) {
      setCurrentQuantity(currentQuantity + 1);
      setTotalItemQuantity(totalItemQuantity + 1);
      updateTotalPrice(item.price, 1);
    }
    console.log('Quantity increased.');
  };
  
  const decreaseQuantity = () => {
    console.log('Decreasing quantity...');
    if (currentQuantity > 1) {
      setCurrentQuantity(currentQuantity - 1);
      setTotalItemQuantity(totalItemQuantity - 1);
      updateTotalPrice(item.price, -1);
    }
    console.log('Quantity decreased.');
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
        <div>
          <button onClick={decreaseQuantity}>-</button>
          <span style={{ margin: '0 10px' }}>{currentQuantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <br />
        <button onClick={onDelete}>Remove from Cart</button>
      </div>
    </li>
  );
}

function Cart() {
  const { cartItems } = useContext(ShopContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const authToken = useSelector(selectToken);
  const navigate = useNavigate();

  const updateTotalPrice = (itemPrice, quantityChange) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + itemPrice * quantityChange);
  };

  useEffect(() => {
    const calculateTotalAmount = async () => {
      let calculatedTotalAmount = 0;
      for (const [itemId, { quantity }] of Object.entries(cartItems)) {
        try {
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
      <Navbar />
      <h1>Shopping Cart</h1>
      <ShopCartItems />
      <ul>
        {Object.entries(cartItems).map(([itemId, { quantity, size }]) => (
          <CartItem key={itemId} itemId={itemId} quantity={quantity} size={size} updateTotalPrice={updateTotalPrice} />
        ))}
      </ul>
      <br />
      <p>Total Amount: ${totalPrice.toFixed(2)} </p>
      <br />
      <Link to="/">
        <button>Continue Shopping</button>
      </Link>
      <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
    </div>
  );
}

export default Cart;