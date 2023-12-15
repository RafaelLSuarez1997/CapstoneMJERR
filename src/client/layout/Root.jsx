import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './Root.less';
import Navbar from './Navbar';

export default function Root() {
  const location = useLocation();

  const targetDate = new Date('December 31, 2023 23:59:59 GMT');
  const [countdown, setCountdown] = useState(calculateTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCountdown(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId); // Clear the interval when the component is unmounted
  }, []);

  function calculateTimeRemaining() {
    const now = new Date();
    const difference = targetDate - now;
    return difference <= 0 ? 0 : difference;
  }

  function formatTime(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const remainingHours = hours % 24;
    const remainingMinutes = minutes % 60;
    const remainingSeconds = seconds % 60;
    return [days, remainingHours, remainingMinutes, remainingSeconds];
  }

  return (
    <>
      <div className="sale-message">
        <p>End of Year Sale! Get 25% off.</p>
        <p>USE CODE "ENDOF2023"</p>
      </div>
      <div className="countdown-container">
        <div className="countdown-timer">
          {formatTime(countdown).map((value, index) => (
            <div key={index} className="countdown-box">
              <span className="countdown-value">{String(value).padStart(2, '0')}</span>
              <span className="countdown-label">
                {index === 0 ? 'Days' : index === 1 ? 'Hours' : index === 2 ? 'Minutes' : 'Seconds'}
              </span>
            </div>
          ))}
        </div>
      </div>
      {location.pathname !== '/checkout' && <Navbar />}
      <main>
        <Outlet />
      </main>
      {location.pathname !== '/checkout' && (
        <footer>
          <section className="footer">
            <div className="footer__container">
              <div className="icons">
                <a href="https://www.facebook.com/stockxdotcom/"><i className="fab fa-facebook"></i></a>
                <a href="https://twitter.com/stockx"><i className="fab fa-twitter"></i></a>
                <a href="https://www.instagram.com/stockx/"><i className="fab fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/stockx/"><i className="fab fa-linkedin"></i></a>
              </div>
            </div>
            <div className="footer__content">
              <h3>©2023 ShoeX. All Rights Reserved.</h3>
              <a href="/about">About us</a>
              <a href="/news">News</a>
              <a href="/careers">Careers</a>
              <a href="/contact">Contact Us</a>
            </div>
          </section>
        </footer>
      )}
    </>
  );
}
