import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewMerchForm(props){
  
  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchCreation({
      name: event.target.name.value,
      detail: event.target.detail.value,
      price: parseInt(event.target.price.value),
      quantity: parseInt(event.target.quantity.value),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleNewMerchFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='detail'
          placeholder='Detail' />
        <input
          name='price'
          placeholder='Price' />
          <input
            name='quantity'
            placeholder="Quantity"/>
        <button type='submit'>Add Mittens!🐱</button>
      </form>
    </React.Fragment>
  );
}

NewMerchForm.propTypes = {
  onNewMerchCreation: PropTypes.func
};

export default NewMerchForm;