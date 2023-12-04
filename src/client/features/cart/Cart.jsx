import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';  // Import axios
import { ShopContext } from './ShopContext';
import { useGetItemQuery } from '../items/itemSlice';
import { Link } from 'react-router-dom';
import './Cart.css';
import { current } from 'immer';

function CartItem({ itemId, quantity, size }) {
  const { removeFromCart } = useContext(ShopContext);
  const { data: item, isLoading } = useGetItemQuery(itemId);
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  if (isLoading) {
    return <p>Loading . . .</p>;
  }

  if (!item) {
    return <p>Item not found</p>;
  }

  const onDelete = () => {
    removeFromCart(itemId);
  };

  const increaseQuantity = ()=> {
    if (currentQuantity < 10){
      setCurrentQuantity (currentQuantity + 1);
    }
  };

  const decreaseQuantity =()=> {
    if (currentQuantity > 1) {
      setCurrentQuantity (currentQuantity - 1);
    }
  };

  const totalPrice = item.price * currentQuantity;

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
          <span style = {{ margin: '0 10 px'}}>{currentQuantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <p>Price: ${totalPrice.toFixed(2)}</p>
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

      const itemIds = Object.keys(cartItems);
      const itemDetailsPromises = itemIds.map((itemId) => axios.get(`/api/items/${itemId}`));

      try {
        const itemDetailsResponses = await Promise.all(itemDetailsPromises);
        const itemDetails = itemDetailsResponses.map((response) => response.data);

        for (const item of itemDetails) {
          const itemId = item.id;
          const quantity = cartItems[itemId].quantity;
          calculatedTotalAmount += item.price * quantity;
        }

        setTotalPrice(calculatedTotalAmount.toFixed(2));
      } catch (error) {
        console.error('Error fetching item details:', error);
      }
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
      <p>Total Amount: ${totalPrice} </p>
      <br/>
      <Link to ="/">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default Cart;
