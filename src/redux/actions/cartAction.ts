import { Action } from "../../models/Action";
import { Cart } from "../../models/Cart";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export function addToCart(cart: Cart) {
  return {
    type: ADD_TO_CART,
    payload: cart,
  } as Action<Cart>;
}

export function removeFromCart(cart: Cart) {
  return {
    type: REMOVE_FROM_CART,
    payload: cart,
  } as Action<Cart>;
}
