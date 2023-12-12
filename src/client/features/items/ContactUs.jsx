import React, { useState } from 'react';
import './ContactUs.less';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // pop up message
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // 
    setShowPopup(true);

    // Reset form data
    setFormData({
      name: "",
      email: "",
      message: "",

    })

  };

  const closePopup = () => {
    // hides pop-up message
    setShowPopup(false);
  }

  return (
    <div>
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us using the form below or through other contact information.</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} />

        <button type="submit">Submit</button>
      </form>

        {/* Popup message */}
          {showPopup && (
        <div className="popup">
          <p>Thank you for your message! We'll be in touch soon.</p>
          <button onClick={closePopup}>Close</button>
        </div>
          )}
    </div>
  );
};

export default ContactUs;
