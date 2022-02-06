import { Action } from "./../../models/Action";
import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";
import { Category } from "../../models/Category";

export default function changeCategoryReducer(
  state = initialState.currentCategory,
  action: Action<Category>
) {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return action.payload;
    default:
      return state;
  }
}
