import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Product } from "../../../models/Product";
import { getCategories } from "../../../redux/actions/categoryActions";
import { saveProduct } from "../../../redux/actions/productAction";
import { RootState } from "../../../redux/rootReducer";
import ProductDetail from "./ProductDetail";

export default function AddOrUpdateProduct() {
  let { productId } = useParams();
  const navigate = useNavigate();
  const product = useSelector((state: RootState) =>
    productId && state.productList.length > 0
      ? state.productList.find((product) => product.id === parseInt(productId))
      : new Product()
  );

  const categories = useSelector((state: RootState) => state.categoryList);

  const [currentProduct, setCurrentProduct] = useState(product);
  const dispatch = useDispatch();
  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories());
    }
    setCurrentProduct(product);
  }, [dispatch]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCurrentProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? Number(value) : value,
    }));
  };

  const handleSave = (event) => {
    event.preventDefault();
    dispatch(saveProduct(currentProduct));
    navigate("/");
  };
  return (
    <ProductDetail
      product={currentProduct}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
    />
  );
}
