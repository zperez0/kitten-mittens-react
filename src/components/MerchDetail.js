import React from "react";
import PropTypes from "prop-types";

function MerchDetail(props){
    // const { merch } = props;

  return (
    <React.Fragment>
      <h1>Merch Detail</h1>
      <h2>{props.merch.name}</h2>
      <h3>{props.merch.price} - {props.merch.quantity}</h3>
      <p><em>{props.merch.detail}</em></p>
      <hr/>
    </React.Fragment>
  );
}

MerchDetail.propTypes = {
    merch: PropTypes.object
};

export default MerchDetail;