import axios from "axios";
import React from "react";
import Navi from "../layouts/navi/Navi";
import Dashboard from "./Dashboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import CartDetail from "../pages/cart/CartDetail";
import AddOrUpdateProduct from "../pages/products/AddOrUpdateProduct";

axios.defaults.baseURL = "http://localhost:3000/";
function App() {
  return (
    <div>
      <div className="container">
        <Navi />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cart" element={<CartDetail />} />
          <Route path="/saveProduct" element={<AddOrUpdateProduct />} />
          <Route
            path="/saveProduct/:productId"
            element={<AddOrUpdateProduct />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ToastContainer
          position="bottom-right"
          theme="colored"
          autoClose={3000}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
}

export default App;
