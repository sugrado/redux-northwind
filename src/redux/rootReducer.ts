import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";
import categoryListReducer from "./reducers/categoryListReducer";
import changeCategoryReducer from "./reducers/changeCategoryReducer";
import productListReducer from "./reducers/productListReducer";

const rootReducer = combineReducers({
  changeCategory: changeCategoryReducer,
  categoryList: categoryListReducer,
  productList: productListReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
