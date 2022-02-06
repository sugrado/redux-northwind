import React from "react";
import CategoryList from "../layouts/categories/CategoryList";
import ProductList from "../pages/products/ProductList";

export default function Dashboard() {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <CategoryList />
        </div>
        <div className="col-md-9">
          <ProductList />
        </div>
      </div>
    </div>
  );
}
