import React from "react";
import PropTypes from "prop-types";

function Merch(props) {
  return(
    <React.Fragment>
      <h3>Check out these mittens</h3>
      <p>{props.name}</p>
      <p>{props.detail}</p>
      <p>{props.price}</p>
      <p>Quanity: {props.quanity}</p>
    </React.Fragment>
  );
}

Merch.prototypes = {
  name: PropTypes.string,
  detail: PropTypes.string,
  price: PropTypes.number,
  quanity: PropTypes.number
};

export default Merch;