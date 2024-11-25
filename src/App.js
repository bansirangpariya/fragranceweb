import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar";
import Signup from "./firebase/signup";
import Signin from "./firebase/signin";
import Home from "./Components/Home";
import About from "./Components/about";
import Footer from "./Components/footer";
import Perfume from "./Components/perfume";
import Feedback from "./Components/feedback";
import Blog from "./Components/blog";
import Product from "./Components/product";
import ScrollToTop from "react-scroll-to-top";
import ProtectedRoute from "./firebase/protectroute";
import Cart from "./Components/cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />}  />
          <Route
            path="/signin"
            element={
              <ProtectedRoute>
                <Signin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/perfume"
            element={
              <ProtectedRoute>
                <Perfume />
              </ProtectedRoute>
            }
          />
          <Route
            path="/product"
            element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            }
          />
          <Route
            path="/feedback"
            element={
              <ProtectedRoute>
                <Feedback />
              </ProtectedRoute>
            }
          />
          <Route
            path="/blog"
            element={
              <ProtectedRoute>
                <Blog />
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
        <ScrollToTop
          smooth
          color="white"
          className="!rounded-full !flex !items-center !justify-center !w-16 !h-16 !bg-[#262626] !z-10 "
        />
      </BrowserRouter>
    </>
  );
}

export default App;
