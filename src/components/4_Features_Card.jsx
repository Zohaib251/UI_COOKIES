import React from "react";
import "./4_Features_Card.css";
import "../image/icons/icomoon/style.css";
const Features_Card = (props) => {
  return (
    <div className={`Card ${props.reverse ? "Card_reverse" : ""}`}>
      <div className="Card_image-container">
        <img src={props.image} alt="Feature" className="Card_image" />
      </div>
      <div className="Card_description">
        <h3 className="heading">{props.title}</h3>
        <p className="heading_description">{props.description}</p>
        <ul>
          <li>
            <span class="icon icon-checkmark"></span>Pointing has no control
          </li>
          <li>
            <span class="icon icon-checkmark"></span>A small river named Duden
            flows
          </li>
          <li>
            <span class="icon icon-checkmark"></span>Roasted parts of sentences
            fly into your mouth
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features_Card;
