import { Action } from "../../models/Action";
import { Cart } from "../../models/Cart";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(
  state = initialState.cart,
  action: Action<Cart>
) {
  switch (action.type) {
    case ADD_TO_CART:
      var addedItem = state.find(
        (p) => p.product.id === action.payload.product.id
      );
      if (addedItem) {
        var newState = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.product.id)
            return Object.assign({}, addedItem, {
              quantity: addedItem.quantity + 1,
            });
          return cartItem;
        });
        return newState;
      } else return [...state, action.payload];

    case REMOVE_FROM_CART:
      break;

    default:
      return state;
  }
}
