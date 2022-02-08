import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Cart } from "../../../models/Cart";
import { removeFromCart } from "../../../redux/actions/cartAction";
import { RootState } from "../../../redux/rootReducer";

export default function CartSummary() {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const removeProductFromCart = (cart: Cart) => {
    dispatch(removeFromCart(cart));
    toast.warn(`${cart.product.productName} removed from your cart.`);
  };

  return (
    <div className="btn-group">
      <Link to={"/cart"}>
        <button type="button" className="btn btn-info">
          Cart
        </button>
      </Link>
      <button
        type="button"
        className="btn btn-info dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <span className="visually-hidden">Toggle Dropdown</span>
      </button>
      <ul className="dropdown-menu">
        {cart.length > 0 ? (
          cart.map((cartItem) => (
            <li key={cartItem.id}>
              <div className="dropdown-item">
                <button
                  onClick={() => {
                    removeProductFromCart(cartItem);
                  }}
                  className="btn btn-link me-2 p-0 pb-1"
                  style={{ color: "red" }}
                >
                  <i className="fa fa-trash"></i>
                </button>
                {cartItem.product.productName}
                <span className="badge bg-primary ms-2">
                  {cartItem.quantity}
                </span>
              </div>
            </li>
          ))
        ) : (
          <div className="ms-3">Your cart is empty.</div>
        )}
      </ul>
    </div>
  );
}
