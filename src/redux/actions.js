import {
  ADD_TO_CART,
  REMOVE_ALL_FROM_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_NUMBER,
  UPDATE_QUANTITY,
} from "./actionTypes";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const removeAllFromCart = () => {
  return {
    type: REMOVE_ALL_FROM_CART,
  };
};
export const updateQuantity = (id, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    payload: { id, quantity },
  };
};

export const updateCartNumber = (quantity) => {
  return {
    type: UPDATE_CART_NUMBER,
    payload: quantity,
  };
};
