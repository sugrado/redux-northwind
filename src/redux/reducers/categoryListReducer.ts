import { Action } from "./../../models/Action";
import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
import { Category } from "../../models/Category";

export default function categoryListReducer(
  state = initialState.categories,
  action: Action<Category[]>
) {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
}
