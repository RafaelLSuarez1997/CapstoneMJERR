import React from 'react';
import './AboutUs.css'; // Assuming you have an accompanying LESS file for styles

const AboutUs = () => {
    return (
      <div className="aboutus-container">
        <div className="aboutus-header">
          <h1>Lorem ipsum</h1>
          <p>sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
            laborum.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
            deserunt mollit anim id est laborum.</p>
        </div>
        <div className="aboutus-content">
          <div className="aboutus-text">
            <p>More text here if needed</p>
          </div>
          <div className="aboutus-person">
            <img src="https://digitaluncovered.com/wp-content/uploads/2021/08/Best-About-Us-Page-Examples.jpg" alt="Co-founder" />
          </div>
        </div>
      </div>
    );
  };
export default AboutUs;