import React from "react";
import "./1_Navbar.css";
const Navbar = () => {
  return (
    <div className="header_container">
      <p>
        uicookies.com Creates High
        <br /> Quality Bootstrap Template For
        <br /> Free
      </p>
      <div className="button-container">
        <button className="header-button no-border">Get Them Now</button>
        <button className="header-button transparent">See Features</button>
      </div>
    </div>
  );
};

export default Navbar;
