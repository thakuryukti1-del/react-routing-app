import React from "react";
import Home from "./Home";
import Product from "./Product";
import Service from "./Service";
import About from "./About";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import ServiceDetails from "./ServiceDetails";
import ServiceUpdate from "./ServiceUpdate";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/product" element={<Product />} />
        <Route path="/product/detail/:name" element={<ProductDetails />} />
   <Route path="/service" element={<Service />}>
        <Route path="detail" element={<ServiceDetails />} />
                <Route path="update" element={<ServiceUpdate />} />
      </Route>
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
