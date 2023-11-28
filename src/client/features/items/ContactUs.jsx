// ContactUs.js

import React, { useState } from 'react';

const ContactUs = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Event handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic here to handle form submission, such as sending an email or making an API request
    console.log('Form submitted:', formData);
    // You can add additional logic here, e.g., sending the form data to a server
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us using the form below or through other contact information.</p>

      {/* Contact form */}
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
