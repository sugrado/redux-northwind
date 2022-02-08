import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Cart } from "../../../models/Cart";
import { removeFromCart } from "../../../redux/actions/cartAction";
import { RootState } from "../../../redux/rootReducer";

export default function CartDetail() {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const removeProductFromCart = (cartItem: Cart) => {
    dispatch(removeFromCart(cartItem));
    toast.warn(`${cartItem.product.productName} removed from your cart.`);
  };

  return (
    <div>
      <h3>Your Cart</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">ProductName</th>
            <th scope="col">Unit Price</th>
            <th scope="col">Quantity</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((cartItem) => (
            <tr key={cartItem.id}>
              <th scope="row">{cartItem.id}</th>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    removeProductFromCart(cartItem);
                  }}
                >
                  <i className="fa fa-trash"></i>
                  <i className="ms-2">Remove From Cart</i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
