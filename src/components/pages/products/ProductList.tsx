import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../redux/actions/productAction";
import { RootState } from "../../../redux/rootReducer";

export default function ProductList() {
  const currentCategory = useSelector(
    (state: RootState) => state.changeCategory
  );
  const products = useSelector((state: RootState) => state.productList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      <h3>
        Products
        <span className="badge bg-success">{currentCategory.categoryName}</span>
      </h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">CategoryId</th>
            <th scope="col">ProductName</th>
            <th scope="col">Quantity Per Unit</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Units In Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <th scope="row">{product.id}</th>
              <td>{product.categoryId}</td>
              <td>{product.productName}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
