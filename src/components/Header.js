import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL} // Replace with your logo URL
          alt="Logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>About</li>
          <li>Home</li>
          <li>Contact</li>
          <li>cart</li>
          <li>
            <button
              className="login-btn"
              onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;