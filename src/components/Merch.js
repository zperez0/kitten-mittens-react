import React from "react";
import PropTypes from "prop-types";

function Merch(props) {
  return(
    <React.Fragment>
      <div onClick ={() => props.whenMerchClicked(props.id)}>
        <h2>{props.name}</h2>
        <h3>{props.detail}</h3>
        <h3>{props.price}</h3>
        <h3>{props.quantity}</h3>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Merch.propTypes = {
  name: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenMerchClicked: PropTypes.func
};

export default Merch;