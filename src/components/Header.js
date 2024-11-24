import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/url";
import { Link } from "react-router-dom";
import useNetworkStatus from "../utils/useNetworkStatus";
import userContext from "../utils/userContext";

const HeaderComponent = () => {
  const [isLoggedIn, setloginStatus] = useState(false);
  const networkStatus = useNetworkStatus()
  const loggedInUser = useContext(userContext)
  
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
          <h5>{loggedInUser.userName}</h5>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
