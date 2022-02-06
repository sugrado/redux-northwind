import axios from "axios";
import { Action } from "../../models/Action";
import { Product } from "../../models/Product";
import { GET_PRODUCTS_SUCCESS } from "./actionTypes";

export function getProductsSuccess(products: Product[]) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: products,
  } as Action<Product[]>;
}

export function getProducts(categoryId: number | undefined = undefined) {
  return (dispatch: (action: Action<Product[]>) => any) => {
    axios
      .get(`products${categoryId ? `?categoryId=${categoryId}` : ""}`)
      .then((response) => dispatch(getProductsSuccess(response.data)))
      .catch((error) => console.log(error));
  };
}
