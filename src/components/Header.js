import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  console.log("Header rendered");

  //Case 1: if no dependency array is provided, useEffect will be called after every render
  //Case 2: if empty [] dependency array is provided, useEffect will be called only once after initial render
  //Case 3: if dependency array contains variables, useEffect will be called when those variables change
  useEffect(() => { 
    console.log("useEffect called");
  }, [btnName]);

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