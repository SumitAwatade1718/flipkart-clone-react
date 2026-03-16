import { useState } from "react";
import "./Header.css";

function Header() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  return (
    <div className="header">
      <div className="left">
        <input type="text" placeholder="Search for products, brands and more" />
      </div>

      <div className="right">
        {/* LOGIN */}
        <div
          className="dropdown"
          onMouseEnter={() => setLoginOpen(true)}
          onMouseLeave={() => setLoginOpen(false)}
        >
          <button className="login">
            <i className="fa-solid fa-user"></i>
            Login
            <i className="fa-solid fa-angle-down"></i>
          </button>
          {loginOpen && (
            <div className="dropdown-menu">
              <p>My Profile</p>
              <p>Orders</p>
              <p>Wishlist</p>
              <p>Rewards</p>
            </div>
          )}
        </div>

        {/* MORE */}
        <div
          className="dropdown"
          onMouseEnter={() => setMoreOpen(true)}
          onMouseLeave={() => setMoreOpen(false)}
        >
          <button className="more">
            More
            <i className="fa-solid fa-angle-down"></i>
          </button>

          {moreOpen && (
            <div className="dropdown-menu">
              <p>Become a Seller</p>
              <p>Notification Settings</p>
              <p>24x7 Customer Care</p>
              <p>Advertise on Flipkart</p>
            </div>
          )}
        </div>

        <button className="cart">
          <i className="fa-solid fa-cart-shopping"></i>
          Cart
        </button>
      </div>
    </div>
  );
}

export default Header;
