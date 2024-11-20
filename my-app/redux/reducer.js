import { ADD_OR_REMOVE_FROM_CART } from './action';

const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_OR_REMOVE_FROM_CART:
      const itemExists = state.cart.some((item) => item.id === action.payload.id);

      if (itemExists) {

        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    default:
      return state;
  }
};



