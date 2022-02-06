import { combineReducers } from "redux";
import categoryListReducer from "./reducers/categoryListReducer";
import changeCategoryReducer from "./reducers/changeCategoryReducer";
import productListReducer from "./reducers/productListReducer";

const rootReducer = combineReducers({
  changeCategory: changeCategoryReducer,
  categoryList: categoryListReducer,
  productList: productListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
