import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="left">
        <img src="KoinX.png" alt="KoinX" />
      </div>
      <div className="right">
        <ul>
          <li>Crypto Taxes</li>
          <li>Free Tools</li>
          <li>Resource Center</li>
        </ul>
        <div className="btnbox">
        <button className="btn">Get Started</button>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
