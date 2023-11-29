// ContactUs.js
import React, { useState } from 'react';
import './ContactUs.less';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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
    // Add additional logic for form submission, e.g., sending data to a server
  };

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
    </div>
  );
};

export default ContactUs;
