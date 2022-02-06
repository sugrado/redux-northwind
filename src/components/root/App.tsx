import axios from "axios";
import React from "react";
import Navi from "../layouts/navi/Navi";
import Dashboard from "./Dashboard";

axios.defaults.baseURL = "http://localhost:3000/";
function App() {
  return (
    <div>
      <div className="container">
        <Navi />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
