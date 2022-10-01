import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Cart from "../pages/Cart";
import Product from "../pages/Product";
import Products from "../pages/Products";
import About from "../pages/About";
import Testimonials from "../pages/Testimonials";
import Contact from "../pages/Contact";
import Footer from "./Footer";
import navLinks from "../assets/fake-data/navLinks";
import ProductModal from "./ProductModal";
import Error from "../pages/Error";
import { useGlobalContext } from "../reducer/Context";
function Layout() {
  const { theme } = useGlobalContext();
  useEffect(() => {
    if (theme == "dark") {
      document.body.className = "dark";
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className={`App`}>
      <Header navLinks={navLinks} />
      <div className="main">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:slug" element={<Product />} />
            <Route path="profile" element={<Profile />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Cart />} />
            <Route path="about" element={<About />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
        <ProductModal />
      </div>
      <Footer navLinks={navLinks} />
    </div>
  );
}

export default Layout;
