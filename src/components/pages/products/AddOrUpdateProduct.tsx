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
  const dispatch = useDispatch();
  const [currentProduct, setCurrentProduct] = useState(product);
  const [errors, setErrors] = useState({});
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
    validate(name, value);
  };

  const validate = (name, value) => {
    if (name === "productName" && value === "") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        productName: "Product name required.",
      }));
    } else {
      setErrors((previousErrors) => ({
        ...previousErrors,
        productName: "",
      }));
    }

    if (name === "categoryId" && value === "") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        categoryId: "Category required.",
      }));
    } else {
      setErrors((previousErrors) => ({
        ...previousErrors,
        categoryId: "",
      }));
    }

    if (name === "unitPrice" && value === "") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        unitPrice: "Unit price required.",
      }));
    } else {
      setErrors((previousErrors) => ({
        ...previousErrors,
        unitPrice: "",
      }));
    }

    if (name === "quantityPerUnit" && value === "") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        quantityPerUnit: "Quantity per unit required.",
      }));
    } else {
      setErrors((previousErrors) => ({
        ...previousErrors,
        quantityPerUnit: "",
      }));
    }

    if (name === "unitsInStock" && value === "") {
      setErrors((previousErrors) => ({
        ...previousErrors,
        unitsInStock: "Units in stock required.",
      }));
    } else {
      setErrors((previousErrors) => ({
        ...previousErrors,
        unitsInStock: "",
      }));
    }
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
      errors={errors}
    />
  );
}
