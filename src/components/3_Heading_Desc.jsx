import React from "react";
import "./3_Heading_Desc.css";

const Heading_Desc = (props) => {
  return (
    <div className="heading">
      <h2 className="title" style={props.customTitleStyle}>{props.title}</h2>
      <hr />
      <p className="description">
        Even the all-powerful Pointing has no control about the blind texts it
        is an almost unorthographic life One
        <br />
        day however a small line of blind text by the name of Lorem Ipsum
        decided to leave for the far World of
        <br /> Grammar.
      </p>
    </div>
  );
};

export default Heading_Desc;
