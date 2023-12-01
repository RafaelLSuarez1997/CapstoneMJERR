import React, { useContext, useState } from 'react';
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

    const handleShippingChange = (e) => {
        const { name, value } = e.target;
        setShippingInfo((prevInfo) => ({ ...prevInfo, [name]: value}));    
    };

    const handlePaymentChange = (e) => {
        const { name, value } = e.target;
        setPaymentInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
    };

    const handlePlaceOrder = () => {

        clearCart();
    
}; 

return (
    <div>
        <h1>Checkout</h1>
   <div>
    <h2>Shipping Information</h2>
    <form>
        <label>
            Full Name:
            <input type="text" name="fullName" value={shippingInfo.fullName} onChange={handleShippingChange} />
        </label>
        <label>
            Adress: 
            <textarea name="address" value={shippingInfo.address} onChange={handleShippingChange} />
        </label>
    </form>
    </div> 

<div>
    <h2>Payment Information</h2>
    <form>
        <label>
            Card Number:
            <input type="text" name="cardNumber" value={paymentInfo.cardNumber} onChange={handlePaymentChange} />
        </label>
        <label>
            Expiration Date: 
            <input type="text" name="expirationDate" value={paymentInfo.expirationDate} onChange={handlePaymentChange} />
        </label>
    </form>
</div>

<div>
    <h2>Order Summary</h2>
    <ul>
        {Object.entries(cartItems).map(([itemId, { quantity, size }]) => (
          <li key={itemId}>
            {/* Display item details */}
            Item ID: {itemId}, Quanity: {quantity}, Size: {size}
          </li>  
        ))}
    </ul>
    <p>Total Amount: ${} </p>
</div>

<div>
    <button onClick={handlePlaceOrder}>Place Order</button> 
    <Link to="/">
        <button>Cancel</button>
    </Link>
</div>
</div> 
);
}       

export default Checkout;