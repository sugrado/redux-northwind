import { Action } from "./../../models/Action";
import { Category } from "../../models/Category";
import * as actionTypes from "./actionTypes";
import axios from "axios";

export function changeCategory(category: Category): Action<Category> {
  return {
    type: actionTypes.CHANGE_CATEGORY,
    payload: category,
  } as Action<Category>;
}

export function getCategoriesSuccess(categories: Category[]) {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payload: categories,
  } as Action<Category[]>;
}

export function getCategories() {
  return (dispatch: (action: Action<Category[]>) => any) => {
    axios
      .get("categories")
      .then((result) => dispatch(getCategoriesSuccess(result.data)))
      .catch((err) => console.log(err.message));
  };
}
