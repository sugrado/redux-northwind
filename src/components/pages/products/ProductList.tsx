import RandExp from "randexp";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Cart } from "../../../models/Cart";
import { Product } from "../../../models/Product";
import { addToCart } from "../../../redux/actions/cartAction";
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

  const addProductToCart = (product: Product) => {
    dispatch(
      addToCart({
        id: Number(new RandExp(/^[0-9]{4}$/).gen()),
        product,
        quantity: 1,
      } as Cart)
    );
    toast.success(`${product.productName} added to cart.`);
  };

  return (
    <div>
      <h3>
        Products
        <span className="badge bg-success">{currentCategory.categoryName}</span>
      </h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Id</th>
            <th scope="col">CategoryId</th>
            <th scope="col">ProductName</th>
            <th scope="col">Quantity Per Unit</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Units In Stock</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <Link to={`saveProduct/${product.id}`}>
                  <button className="btn btn-link">
                    <i className="fa fa-edit"></i>
                  </button>
                </Link>
              </td>
              <th scope="row">{product.id}</th>
              <td>{product.categoryId}</td>
              <td>{product.productName}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => {
                    addProductToCart(product);
                  }}
                >
                  <i className="fa fa-shopping-cart"></i>
                  <i className="ms-2">Add To Cart</i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
