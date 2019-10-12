import React from "react";
import { connect } from "react-redux";

import {
  addItem,
  removeItem,
  removeSingleItem
} from "../../redux/cart/cart.actions";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item, addItem, removeSingleItem, removeItem }) => {
  const { name, imageUrl, quantity, price } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => removeSingleItem(item)} className="arrow">
          &#10094;
        </div>
        <span>{quantity}</span>
        <div onClick={() => addItem(item)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div onClick={() => removeItem(item)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

const mapPropsToState = dispatch => ({
  addItem: item => dispatch(addItem(item)),
  removeSingleItem: item => dispatch(removeSingleItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapPropsToState
)(CheckoutItem);
