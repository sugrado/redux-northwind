import axios from "axios";
import { Action } from "../../models/Action";
import { Product } from "../../models/Product";
import {
  CREATE_PRODUCTS_SUCCESS,
  GET_PRODUCTS_SUCCESS,
  UPDATE_PRODUCTS_SUCCESS,
} from "./actionTypes";

export function getProductsSuccess(products: Product[]) {
  return {
    type: GET_PRODUCTS_SUCCESS,
    payload: products,
  } as Action<Product[]>;
}

export function createProductSuccess(product: Product) {
  return {
    type: CREATE_PRODUCTS_SUCCESS,
    payload: product,
  } as Action<Product>;
}

export function updateProductSuccess(product: Product) {
  return {
    type: UPDATE_PRODUCTS_SUCCESS,
    payload: product,
  } as Action<Product>;
}

export function getProducts(categoryId: number | undefined = undefined) {
  return (dispatch: (action: Action<Product[]>) => any) => {
    axios
      .get(`products${categoryId ? `?categoryId=${categoryId}` : ""}`)
      .then((response) => dispatch(getProductsSuccess(response.data)))
      .catch((error) => console.log(error));
  };
}

export function saveProduct(product: Product) {
  return function (dispatch) {
    return saveProductApi(product)
      .then((savedProduct) => {
        product.id
          ? dispatch(updateProductSuccess(savedProduct))
          : dispatch(createProductSuccess(savedProduct));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function saveProductApi(product: Product) {
  let method = product.id
    ? axios.put("products", product)
    : axios.post("products", product);

  return method.then(handleResponse).catch(handleError);
}

export async function handleResponse(response: any) {
  if (response.ok) return response;
  const error = await response;
  throw new Error(error);
}

export async function handleError(error: any) {
  throw error;
}
