import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout, selectToken } from "../features/auth/authSlice";
import ContactUs from "../features/items/ContactUs";


import { ShoppingCart } from "phosphor-react";

import "./Navbar.less";


/**
 * A simple navigation bar that displays "Log In" if the user is not logged in,
 * and "Log Out" if the user is logged in.
 */
export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector(selectToken);

  const handleLogout = async () => {
    await dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="top">
      <div className="logo">
        <h1>Shoe X</h1>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />


      </div>
      <menu>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li> 
        <NavLink to="/contact">Contact Us</NavLink>
        </li>
        {token ? (
          <li>
            <a onClick={handleLogout}>Log Out</a>
          </li>
        ) : (
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
        )}
        <li>
          <NavLink to="/cart"><ShoppingCart size={20}/></NavLink>
        </li>
      </menu>
    </nav>
  );
}
