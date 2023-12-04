import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from './ShopContext';
// import "./Checkout.less"

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

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const calculateTotalAmount = () => {
    // calculate total amount
    const total = Object.values(cartItems).reduce(
      (acc, { quantity, price, size }) => acc + quantity * price,
      0
    );
  
    // returns 0 if invalid
    return isNaN(total) ? 0 : total;
  };

  const generateRandomOrderId = () => {
    return Math.floor(Math.random() * 1000000).toString();
  };

  const handlePlaceOrder = () => {

    // generate a random order ID
    const newOrderId = generateRandomOrderId();
    setOrderId(newOrderId);

    // clears cart when order is placed added from ShopContext
    clearCart();

    // set the state to show the order confirmation
    setIsOrderPlaced(true);
  };

  const handleCloseModal = () => {
    setIsOrderPlaced(false);
  };

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
              required={shippingInfo.fullName}
            />
          </label>
          <label>
            Address:
            <textarea
              name="address"
              value={shippingInfo.address}
              onChange={handleShippingChange}
              required={shippingInfo.address}
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
              required={[paymentInfo.cardNumber]}
            />
          </label>
          <label>
            Expiration Date:
            <input
              type="text"
              name="expirationDate"
              value={paymentInfo.expirationDate}
              onChange={handlePaymentChange}
              required={paymentInfo.expirationDate} 
            />
          </label>
        </form>
      </div>
      <div>
        <h2>Order Summary</h2>
        <ul>
          {Object.entries(cartItems).map(([itemId, { quantity, size, price }]) => (
            <li key={itemId}>
              Item ID: {itemId}, Quantity: {quantity}, Size: {size}, Price: ${price}
            </li>
          ))}
        </ul>
        <p>Total Amount: ${calculateTotalAmount()}</p>
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