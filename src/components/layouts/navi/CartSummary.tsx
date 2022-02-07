import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";

export default function CartSummary() {
  const cart = useSelector((state: RootState) => state.cart);
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-info">
        Cart
      </button>
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
                {cartItem.product.productName}
                <span className="badge bg-warning ms-2">
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
