import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/url";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [isLoggedIn, setloginStatus] = useState(false);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <button
            className="button"
            onClick={() => setloginStatus(!isLoggedIn)}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
