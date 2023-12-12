import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ShopContext } from './ShopContext';
import { useGetItemQuery } from '../items/itemSlice';
import { selectToken } from '../auth/authSlice';
import { useSelector } from 'react-redux';
import './Cart.less';

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
      setTotalItemQuantity(totalItemQuantity + 1);
      updateTotalPrice(item.price, 1);
    }
  };

  const decreaseQuantity = () => {
    if (currentQuantity > 1) {
      setCurrentQuantity(currentQuantity - 1);
      setTotalItemQuantity(totalItemQuantity - 1);
      updateTotalPrice(item.price, -1)
    }
  };

  return (
    <li key={itemId}>
      <img src={item.imageUrl} alt={item.name} />
      <div>
        <h3>{item.name}</h3>
        <p>Item ID: {itemId}</p>
        <p>Brand: {item.brand}</p>
        <p>Size: {size}</p>
        <div>
          <button onClick={() => handleQuantityChange(-1)}>-</button>
          <span style={{ margin: '0 10px' }}>{currentQuantity}</span>
          <button onClick={() => handleQuantityChange(1)}>+</button>
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
        <Navbar></Navbar>
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
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
      </div>
    );
  } else {
    return <p>Please log in or sign up to view your cart</p>;
  }
}

export default Cart;
