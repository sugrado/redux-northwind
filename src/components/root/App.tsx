import axios from "axios";
import React from "react";
import Navi from "../layouts/navi/Navi";
import Dashboard from "./Dashboard";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

axios.defaults.baseURL = "http://localhost:3000/";
function App() {
  return (
    <div>
      <div className="container">
        <Navi />
        <Dashboard />
        <ToastContainer
          position="bottom-right"
          theme="colored"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
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
