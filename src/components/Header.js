import { LOGO_URL } from "../utils/constants";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext)
  console.log(loggedInUser);
  

  //Case 1: if no dependency array is provided, useEffect will be called after every render
  //Case 2: if empty [] dependency array is provided, useEffect will be called only once after initial render
  //Case 3: if dependency array contains variables, useEffect will be called when those variables change
  useEffect(() => { 
    console.log("useEffect called");
  }, [btnName]);

  return (
    <div className="shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        {/* Logo - Always visible on page load */}
        <div className="flex items-center">
          <img
            src={LOGO_URL}
            alt="Turanto Logo"
            className="w-20 h-20 object-contain"
            loading="eager"
          />
        </div>

        {/* Nav Items */}
        <ul className="flex items-center gap-8 text-gray-700 font-medium">
          <li className="flex items-center text-sm">
            <span className="mr-2">Network Status:</span>
            <span>{onlineStatus ? "🟢 Online" : "🔴 Offline"}</span>
          </li>
          <li className="hover:text-orange-500 transition-colors">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors">
            <Link to="/cart" className="relative">
              Cart
              <span className="absolute -top-2 -right-3 bg-orange-500 text-white text-xs font-bold rounded-full px-2 py-0.5">
                0
              </span>
            </Link>
          </li>
          <li className="hover:text-orange-500 transition-colors">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <button
              className="px-4 py-1.5 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition"
              onClick={() =>
                setBtnName(btnName === "Login" ? "Logout" : "Login")
              }>
              {btnName}
            </button>
          </li>
          <li className="hover:text-orange-500 transition-colors">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );

};

export default Header;