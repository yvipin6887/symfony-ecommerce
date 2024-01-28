import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./shop/pages/Home"
// import Blog from "./shop/pages/Blog"
import About from "./shop/pages/About"
import Shop from "./shop/pages/Shop"
import ProductPage from './shop/pages/ProductPage';
import NewAprrival from "./shop/pages/NewAprrival"
import NotFound from "./shop/pages/NotFound"
import Cart from './shop/pages/Cart';
import Registration from './shop/pages/auth/Registration';
import Login from './shop/pages/auth/Login';
     
function Main() {
    return (
        <Router>
            <Routes>
                <Route exact path="/"  element={<Home/>} />
                <Route exact path="/customer/register" element={<Registration/>} />
                <Route exact path="/customer/login" element={<Login/>} />
                <Route exact path="/home"  element={<Home/>} />
                {/* <Route path="/blog"  element={<Blog/>} /> */}
                <Route path="/about"  element={<About/>} />
                <Route path="/shop"  element={<Shop/>} />
                <Route path="/new-aprrival"  element={<NewAprrival/>} />
                <Route path="/cart"  element={<Cart/>} />
                <Route path="/product/:urlKey"  element={<ProductPage/>} />
                <Route element={<NotFound/>} />
            </Routes>
        </Router>
    );
}
     
export default Main;
     
if (document.getElementById('app')) {
    const rootElement = document.getElementById("app");
    const root = createRoot(rootElement);
 
    root.render(
        <StrictMode>
            <Main />
        </StrictMode>
    );
}