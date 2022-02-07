import React from "react";
import CartSummary from "./CartSummary";

export default function Navi() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="navbar-brand">Navbar</div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link active" aria-current="page">
                  Home
                </div>
              </li>
            </ul>
            <CartSummary />
          </div>
        </div>
      </nav>
    </div>
  );
}
