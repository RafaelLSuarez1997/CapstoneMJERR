import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ShopContext } from './ShopContext';

function Checkout() {
  const { cartItems, clearCart } = useContext(ShopContext);
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    address: '',
  });
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expirationDate: '',
  });
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const calculateTotalAmount = async () => {
    try {
      const itemPrices = await Promise.all(
        Object.entries(cartItems).map(async ([itemId, { quantity }]) => {
          const response = await axios.get(`/api/items/${itemId}`);
          const item = response.data;
          return item.price * quantity;
        })
      );

      const total = itemPrices.reduce((acc, price) => acc + price, 0);
      return isNaN(total) ? 0 : total;
    } catch (error) {
      console.error('Error calculating total amount:', error);
      return 0; // handles the error
    }
  };

  const generateRandomOrderId = () => {
    return Math.floor(Math.random() * 1000000).toString();
  };

  const handlePlaceOrder = async () => {
    try {
      // generate a random order ID
      const newOrderId = generateRandomOrderId();
      setOrderId(newOrderId);

      // clears cart when order is placed added from ShopContext
      clearCart();

      // calculate total amount
      const total = await calculateTotalAmount();
      setTotalAmount(total);

      // set the state to show the order confirmation
      setIsOrderPlaced(true);
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  const handleCloseModal = () => {
    setIsOrderPlaced(false);
  };

  useEffect(() => {
    const fetchTotalAmount = async () => {
      const total = await calculateTotalAmount();
      setTotalAmount(total);
    };

    fetchTotalAmount();
  }, [cartItems]);

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <h2>Shipping Information</h2>
        <form>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={shippingInfo.fullName}
              onChange={handleShippingChange}
              required
            />
          </label>
          <label>
            Address:
            <textarea
              name="address"
              value={shippingInfo.address}
              onChange={handleShippingChange}
              required
            />
          </label>
        </form>
      </div>
      <div>
        <h2>Payment Information</h2>
        <form>
          <label>
            Card Number:
            <input
              type="text"
              name="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={handlePaymentChange}
              required
            />
          </label>
          <label>
            Expiration Date:
            <input
              type="text"
              name="expirationDate"
              value={paymentInfo.expirationDate}
              onChange={handlePaymentChange}
              required
            />
          </label>
        </form>
      </div>
      <div>
        <h2>Order Summary</h2>
        <ul>
          {Object.entries(cartItems).map(([itemId, { quantity, size, price }]) => (
            <li key={itemId}>
              Item ID: {itemId}, Quantity: {quantity}, Size: {size}
            </li>
          ))}
        </ul>
        <p>Total Amount: ${totalAmount.toFixed(2)}</p>
      </div>
      <div>
        <button onClick={handlePlaceOrder}>Place Order</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
      {/* Order Confirmation Popup */}
      {isOrderPlaced && (
        <div className="popup-msg">
          <div className="popup-content">
            <span className="close" onClick={handleCloseModal}>
              X
            </span>
            <p>Your order has been successfully placed!</p>
            <p>Order ID: {orderId}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
