import React from "react";
import "./6_ReviewCard.css";
import "../image/icons/icomoon/style.css";
function ReviewCard(props) {
  return (
    <div className="review-card">
      <div className="user-info">
        <img src={props.image} alt="User Profile" />
      </div>
      <div className="rating">
        <span className="icon icon-star"></span>
        <span className="icon icon-star"></span>
        <span className="icon icon-star"></span>
        <span className="icon icon-star"></span>
        <span
          className="icon icon-star Icons"
          style={props.customIconsStyle}
        ></span>
      </div>
      <div className="review-text">{props.description}</div>
      <div className="user-name">— {props.name}</div>
    </div>
  );
}

export default ReviewCard;
