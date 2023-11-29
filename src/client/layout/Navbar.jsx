import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout, selectToken } from "../features/auth/authSlice";

import "./Navbar.less";

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
        {/* Your search bar code goes here */}
        <input type="text" placeholder="Search..." />
        {/* You can add a search button if needed */}
        {/* <button type="button">Search</button> */}
      </div>
      <menu>
        <li>
          <NavLink to="/">Home</NavLink>
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
      </menu>
    </nav>
  );
}
