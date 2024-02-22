import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./ProductListing";
import Headerr from "./Headerr";
import "./App.css";
import ProductDetails from "./ProductDetail";

function App() {
  return (
    <div className="App">
      <Headerr /><br/><br/><br/>
      <Router>
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="*" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;