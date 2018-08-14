import {
  SHOW_CART_MODAL,
  HIDE_CART_MODAL
} from './actionTypes';


export function showCart() {
  return {
    type: SHOW_CART_MODAL,
  };
};

export function hideCart() {
  return {
    type: HIDE_CART_MODAL,
  };
};