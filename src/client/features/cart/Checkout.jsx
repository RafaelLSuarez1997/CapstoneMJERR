import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from './ShopContext';
import ThankYouMessage from './ThankYouMessage';
import "./Checkout.css";

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
  const [itemDetails, setItemDetails] = useState({});
  const navigate = useNavigate();
  const [discountCode, setDiscountCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);

  const handleDiscountCodeChange = (e) => {
    setDiscountCode(e.target.value);
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;2
    setPaymentInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const fetchItemDetails = async () => {
    const details = {};
    for (const [itemId, { quantity }] of Object.entries(cartItems)) {
      try {
        const response = await axios.get(`/api/items/${itemId}`);
        details[itemId] = response.data;
      } catch (error) {
        console.error(`Error fetching item details for itemId ${itemId}:`, error);
        details[itemId] = null;
      }
    }
    setItemDetails(details);
  };

  useEffect(() => {
    fetchItemDetails();
  }, [cartItems]);

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
      return 0;
    }
  };

  const generateRandomOrderId = () => {
    return Math.floor(Math.random() * 1000000).toString();
  };

  const handlePlaceOrder = async () => {
    try {

      // check if shipping info is complete
      if (!shippingInfo.fullName || !shippingInfo.address) {
        alert("Please fill in all shipping information")
        return;
      }
      // check if payment info is complete
      if (!paymentInfo.cardNumber || !paymentInfo.expirationDate) {
        alert("Please fill in all shipping information")
        return;
      }

      // generate a random order ID
      const newOrderId = generateRandomOrderId();
  
      // set the order ID in the component's state
      setOrderId(newOrderId);
  
      // clears cart when the order is placed, added from ShopContext
      clearCart();
  
      // calculate the total amount
      const total = await calculateTotalAmount();
      setTotalAmount(total);
  
      // set the state to show the order confirmation
      setIsOrderPlaced(true);
  
      // navigate to the order confirmation page with the order ID
      navigate(`/checkout-message/${newOrderId}`);
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };
  
  useEffect(() => {
    if (isOrderPlaced && orderId) {
      navigate(`/checkout-message/${orderId}`);
    }
  }, [isOrderPlaced, orderId, navigate]);
  
  useEffect(() => {
    const fetchTotalAmount = async () => {
      const total = await calculateTotalAmount();
      setTotalAmount(total);
    };

    fetchTotalAmount();
  }, [cartItems]);

  const applyDiscount = async () => {
    if (discountCode === 'ENDOF2023') {
      // Assuming the discount code is valid, apply a 25% discount
      const total = await calculateTotalAmount();
      const discount = total * 0.25;
      setDiscountAmount(discount);
    } else {
      setDiscountAmount(0);
    }
  };

  useEffect(() => {
    applyDiscount();
  }, [discountCode, cartItems]);

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <div className="shipping-info">
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
      <div className="payment-info">
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
      <div className="discount-code">
        <h2>Discount Code</h2>
        <label>
          Enter discount code:
          <input
            type="text"
            value={discountCode}
            onChange={handleDiscountCodeChange}
          />
        </label>
      </div>
      <div className="order-summary">
        <h2>Order Summary</h2>
        <ul>
          {Object.entries(cartItems).map(([itemId, { quantity, size , price }]) => (
            <li key={itemId}>
              {itemDetails[itemId] ? (
                <div className='shoeInfo'>
                  <img className="checkoutImg" src={itemDetails[itemId].imageUrl} alt={`Product ${itemId}`} />
                  <p>{itemDetails[itemId].brand} |</p>
                  <p>Quantity:{quantity} |</p>
                  <p>Size:{size} |</p>
                  <p>${itemDetails[itemId].price} |</p>
                  <br />
                </div>
          ) : (
            <p>Item details not available</p>
          )}
        </li>
      ))}
    </ul>
    {discountAmount > 0 && <p>Discount: ${discountAmount.toFixed(2)}</p>}
    <p>Total Amount: ${(totalAmount - discountAmount).toFixed(2)}</p>
  </div>
      <div className="action-buttons">
        <Link to="/cart">
          <button>Back to Cart</button>
        </Link>
        <button onClick={handlePlaceOrder}>Place Order</button>
      </div>
      {isOrderPlaced && (
        <ThankYouMessage orderId={orderId} onClose={handleClose} />
      )}
    </div>
  );
}

export default Checkout;
