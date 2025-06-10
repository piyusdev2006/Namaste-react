import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;