import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./ThankYouMessage.less"
function ThankYouMessage({ onClose }) {
  const location = useLocation();
  const orderId = new URLSearchParams(location.search).get('orderId');

  return (
    <div className="popup-msg">
      <div className="popup-content">
        <span className="close" onClick={onClose}>
          X
        </span>
        <p>Thank you for your purchase!</p>
        <p>Your order has been successfully placed.</p>
        <p>Order ID: {orderId}</p>
        <Link to="/">
          <button>Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default ThankYouMessage;