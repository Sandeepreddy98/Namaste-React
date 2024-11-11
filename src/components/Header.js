import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/url";

const HeaderComponent = () => {
  const [isLoggedIn, setloginStatus] = useState(false);
  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <button className="button" onClick={() => setloginStatus(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
