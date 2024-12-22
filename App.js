import React from "react";
import ReactDOM from "react-dom/client";

/*
* - Headers
    - logo
    - navItems
* - Body
    - card
    - restaurants name
* - Footer
*
*/
const Headers = () => {
  return (
    <div className="headers">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/cute-male-courier-delivery-package-with-motorcycle-cartoon-vector-icon-illustration-people-job_138676-5708.jpg?t=st=1730689933~exp=1730693533~hmac=8c8c5d3324cfce00de7f6d5bf575eb7679bebd20e3cdf9a1d2cc1f88e4e1cdbe&w=740"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="by-kilo"
        alt="biryani image"
        src="https://www.thespruceeats.com/thmb/oIaxLSj0xxAbD39jykKk3XsFo9s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SES-chicken-biryani-recipe-7367850-hero-A-ed211926bb0e4ca1be510695c15ce111.jpg"
      ></img>
      <div>
        <h3>Biryani By Kilo</h3>
        <h4>Biryani, North Indian</h4>
        <h4>4.3 stars</h4>
        <h4>38 minutes</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search Your restaurants</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Headers />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
