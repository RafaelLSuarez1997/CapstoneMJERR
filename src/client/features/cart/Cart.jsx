import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from './ShopContext';
import { useGetItemQuery, useDeleteItemMutation } from '../items/itemSlice';
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
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateTotalAmount = async () => {
    let calculatedTotalAmount = 0;

    for (const [itemId, { quantity }] of Object.entries(cartItems)) {
      try {
        const { data: item } = await useGetItemQuery(itemId).unwrap();
        calculatedTotalAmount += item.price * quantity;
      } catch (error) {
        console.error(`Error fetching item details for itemId ${itemId}:`, error);
      }
    }

    return calculatedTotalAmount;
  };

  useEffect(() => {
    calculateTotalAmount().then((result) => setTotalAmount(result));
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
      <p>Total Amount: ${totalAmount} </p>
      <br/>
      <Link to ="/">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default Cart;