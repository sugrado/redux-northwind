import { Category } from "../../models/Category";
import { Product } from "../../models/Product";

export default {
  currentCategory: new Category(),
  categories: [] as Category[],
  products: [] as Product[],
};
