import { Action } from "../../models/Action";
import { Product } from "../../models/Product";
import { GET_PRODUCTS_SUCCESS } from "../actions/actionTypes";
import initialState from "./initialState";

export default function productListReducer(
  state = initialState.products,
  action: Action<Product[]>
) {
  switch (action.type) {
    case GET_PRODUCTS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
