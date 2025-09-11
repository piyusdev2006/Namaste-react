import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  console.log("Header rendered");

  const onlineStatus = useOnlineStatus();

  //Case 1: if no dependency array is provided, useEffect will be called after every render
  //Case 2: if empty [] dependency array is provided, useEffect will be called only once after initial render
  //Case 3: if dependency array contains variables, useEffect will be called when those variables change
  useEffect(() => { 
    console.log("useEffect called");
  }, [btnName]);

  return (
    <div className="flex justify-between bg-pink-50 sm:bg-slate-400 lg:bg-green-200 shadow-lg mb-1">
      <div className="logo-container">
        <img
          className="w-20 h-20 p-2"
          src={LOGO_URL} // Replace with your logo URL
          alt="Logo"
        />
      </div>

      <div className="items-center">
        <ul className="flex gap-4 p-4 m-4">
          <li className="px-3">Network Status: {onlineStatus ? "🟢 Online" : "🔴 Offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <button
              className="login-btn"
              onClick={() =>
                setBtnName(btnName === "Login" ? "Logout" : "Login")
              }>
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;