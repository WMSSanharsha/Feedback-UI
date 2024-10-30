import React from "react";

function Card({ children, reverse = false }) {
  return <div className={reverse ? "card reverse" : "card"}>{children}</div>;
}

export default Card;
