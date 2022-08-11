import React from "react";
import Merch from "./Merch";
import PropTypes from "prop-types";

function MerchList(props) {
  return (
    <React.Fragment>
      <hr />
      {props.merchList.map((merch) => (
        <Merch
          whenMerchClicked={props.onMerchSelection}
          name={merch.name}
          detail={merch.detail}
          price={merch.price}
          quantity={merch.quantity}
          id={merch.id}
          key={merch.id}
        />
      ))}
    </React.Fragment>
  );
}

MerchList.propTypes = {
  merchList: PropTypes.array,
  onMerchSelection: PropTypes.func,
};

export default MerchList;
