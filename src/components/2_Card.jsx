import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./2_Card.css";
const Card = (props) => {
  return (
    <div className="card">
      <div className="feature-card">
        <span className={`feature-image  ${props.iconClass}`} />
        <h6 className="feature-title" style={props.customTitleStyle}>
          {props.title}
        </h6>
        <p className="feature-description" style={props.customDescriptionStyle}>
          {props.description}
        </p>
        <a href="#" className="feature-link">
          Learn More{" "}
          <FontAwesomeIcon icon={faChevronRight} className="icon-right" />
        </a>
      </div>
    </div>
  );
};
Card.propTypes = {
  iconClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  customTitleStyle: PropTypes.object,
};
Card.defaultProps = {
  customTitleStyle: {},
};
export default Card;
