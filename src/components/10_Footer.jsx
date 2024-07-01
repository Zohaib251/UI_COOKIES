import React from "react";
import "./10_Footer.css";
import "../image/icons/icomoon/style.css";
function Footer() {
  return (
    <div className="Footer_Container">
      <p className="icons">
        <a href="" className="icons icon-twitter"></a>
        <a href="" className="icons icon-facebook"></a>
        <a href="" className="icons icon-instagram"></a>
        <a href="" className="icons icon-linkedin2"></a>
      </p>
      <div className="copyWrite">
        <p>© 2019 Frame. All Rights Reserved. </p>
        <p>
          {" "}
          Designed & <a href="#">Bootstrap templates </a>by uiCookies{" "}
        </p>
        <p>
          {" "}
          Demo Images by <a href="#">Unsplash</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
