import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsQuantity = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce((cartQuantity, cartItem) => {
      return cartQuantity + cartItem.quantity;
    }, 0)
);
