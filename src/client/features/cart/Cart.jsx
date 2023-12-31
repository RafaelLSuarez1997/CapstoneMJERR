import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ShopContext } from './ShopContext';
import { useGetItemQuery } from '../items/itemSlice';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './cart.css';
import { selectToken } from '../auth/authSlice';
import { useSelector } from 'react-redux';



function CartItem({ itemId, quantity, size, updateTotalPrice }) {
  const { removeFromCart } = useContext(ShopContext);
  const { data: item, isLoading } = useGetItemQuery(itemId);
  const [currentQuantity, setCurrentQuantity] = useState(quantity);


  useEffect(() => {
    setCurrentQuantity(quantity);
  }, [quantity]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!item) {
    return <p>Item not found</p>;
  }

  const onDelete = () => {
    removeFromCart(itemId);
  };

  const increaseQuantity = () => {
    if (currentQuantity < 10) {
      setCurrentQuantity(currentQuantity + 1);
      updateTotalPrice(item.price, 1);
    }
  };

  const decreaseQuantity = () => {
    if (currentQuantity > 1) {
      setCurrentQuantity(currentQuantity - 1);
      updateTotalPrice(item.price, -1)
    }
  };

  return (
    <li className="cartBox" key={itemId}>
      <img className='cartImg' src={item.imageUrl} alt={item.name} />
      <div>
        <div className='cartData'></div>
        <h3>{item.name}</h3>
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
  const navigate = useNavigate(); // Use useNavigate hook

  const updateTotalPrice = (itemPrice, quantityChange) => {
    setTotalPrice((prevTotalPrice) => prevTotalPrice + itemPrice * quantityChange);
  };

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
          console.error(`Error fetching item with ID ${itemId}:`, error);
        }
      }

      setTotalPrice(calculatedTotalAmount);
    };

    calculateTotalAmount();
  }, [cartItems]);

  if (authToken) {
    return (
      <div>
        <h1>Shopping Cart</h1>
        <ul>
          {Object.entries(cartItems).map(([itemId, { quantity, size }]) => (
            <CartItem key={itemId} itemId={itemId} quantity={quantity} size={size} updateTotalPrice={updateTotalPrice} />
          ))}
        </ul>
        <br />
        <p>Total Amount: ${totalPrice.toFixed(2)}</p>
        <br />
        <Link to="/">
          <button>Continue Shopping</button>
        </Link>
        <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
      </div>
    );
  } else {
    return <p>Please log in or sign up to view your cart</p>;
  }
}

export default Cart;