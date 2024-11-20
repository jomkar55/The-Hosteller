export const ADD_OR_REMOVE_FROM_CART = 'ADD_OR_REMOVE_FROM_CART';

export const addOrRemoveFromCart = (hostel) => ({
  type: ADD_OR_REMOVE_FROM_CART,
  payload: hostel,
});
