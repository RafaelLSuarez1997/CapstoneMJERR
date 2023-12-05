import React from 'react';
import { Link, useParams } from 'react-router-dom';
import "./ThankYouMessage.less";

function ThankYouMessage({ onClose }) {
  const { orderId } = useParams();
  console.log("orderId:", orderId);
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
