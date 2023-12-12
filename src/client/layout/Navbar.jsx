import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout, selectToken } from '../features/auth/authSlice';
import ContactUs from '../features/items/ContactUs';
import { ShopContext } from '../features/cart/ShopContext';
import { ShoppingCart } from 'phosphor-react';
import Cart from '../features/cart/Cart';
import './Navbar.less';
import image from'../assets/SmallLogo.png'
import imagetext from'../assets/LogoText.png'

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartCount } = useContext(ShopContext);
  const token = useSelector(selectToken);

  const handleLogout = async () => {
    await dispatch(logout());
    navigate('/');
  };


  return (
    <nav className="top">
      
        <NavLink to="/">
        <img className='imgtext' src={imagetext} alt='logo' />
        </NavLink>
      <menu>
      <li>
          <NavLink to="/all">All Sneakers</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        {token
          ? <li>
              <a onClick={handleLogout}>Log Out</a>
            </li>
          : <li>
              <NavLink to="/login">Log In</NavLink>
            </li>}
        <li>
          <NavLink to="/cart">
            <ShoppingCart size={20} />
            <span>
              {cartCount}
            </span>
          </NavLink>
        </li>
      </menu>
    </nav>
  );
}