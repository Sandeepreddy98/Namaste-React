import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/url";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";

const HeaderComponent = () => {
  const [isLoggedIn, setloginStatus] = useState(false);
  const networkStatus = useNetworkStatus()
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>status : {networkStatus ? '🟢' : '🔴'}</li>
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
