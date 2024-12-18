import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Sign from "./pages/Sign";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Collection from "./pages/Collection";
import Cart from "./pages/cart";
import Footer from "../Footer";
import Search from "./pages/inner/Search";
import Product from "./pages/Product";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Placeorder from "./pages/Placeorder";
import Orders from "./pages/Orders";

const App = () => {
  return (
    <div className="px-4 py-2 sm:px-5 md:px-7 lg:px-9">
      <ToastContainer />
      <Navbar />
      <Search />
      <Routes>
        <Route path="/product/:productId" element={<Product />} />
        
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place" element={<Placeorder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
