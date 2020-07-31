import React from "react";

const FaqCard = (props) => {
  return (
    <div className="faq-card" id={props.id}>
      <div className="fc-header">
        <h1>{props.heading}</h1>
      </div>
      <div className="fc-content">{props.children}</div>
    </div>
  );
};

export default FaqCard;
