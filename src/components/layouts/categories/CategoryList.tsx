import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Category } from "../../../models/Category";
import {
  changeCategory,
  getCategories,
} from "../../../redux/actions/categoryActions";
import { getProducts } from "../../../redux/actions/productAction";
import { RootState } from "../../../redux/rootReducer";

export default function CategoryList() {
  const currentCategory = useSelector(
    (state: RootState) => state.changeCategory
  );

  const categories = useSelector((state: RootState) => state.categoryList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const selectCategory = (category: Category) => {
    dispatch(changeCategory(category));
    dispatch(getProducts(category.id));
  };

  return (
    <div>
      <h3>Categories</h3>
      <ul className="list-group">
        <li
          className="list-group-item"
          onClick={() => selectCategory(new Category())}
        >
          All
        </li>
        {categories.map((category) => (
          <li
            key={category.id}
            className={`list-group-item${
              currentCategory.id === category.id ? " active" : ""
            }`}
            onClick={() => selectCategory(category)}
          >
            {category.categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}
