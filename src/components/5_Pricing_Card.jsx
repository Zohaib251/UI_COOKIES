import React from "react";
import "./5_Pricing_Card.css";
import "../image/icons/icomoon/style.css";

const Pricing_Card = ({
  title,
  price,
  features,
  customButtonClass,
  customClass,
}) => (
  <div className="pricing_card">
    <div className={`price_box ${customClass || ""}`}>
      <h2 className="titles">{title}</h2>
      <div className="price">
        <b>{price}</b>
        <span>This is a monthly recurring payment.</span>
      </div>
      <div className="features">
        <ul>
          {features.map((feature, index) => (
            <li key={index}>
              <span className="icon icon-checkmark"></span> {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="button">
        <button className={`custom-button ${customButtonClass}`}>
          Get Started
        </button>
      </div>
    </div>
  </div>
);

export default Pricing_Card;
