import ReactDOM from "react-dom/client";
import React from "react";


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
            className="logo"
            src="https://cdn.worldvectorlogo.com/logos/food-network-2-1.svg"
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
}

const RestaurantCard = () => {
  return (
    <div
      className="restaurant-card" style={{backgroundColor:"f0f0f0"}}>
      <img
        className="restaurant-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/27/d8774289-691f-4e69-a984-c69d850bf328_923886%20(1).jpg"
        alt="Restaurant Logo"
        
      />
      <p>Krishna Food</p>
      <p>Burger,Aisan</p>
      <p>4.4 stars</p>
      <p>38 Minutes</p>
    </div>
  );
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
}


const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
