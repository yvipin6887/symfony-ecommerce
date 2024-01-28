import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import CartList from "../components/carts/CartList";

const Cart = () => {
    return (
        <>
            <Header/>
                <Layout>
                    <CartList />
                </Layout>
            <Footer/>
        </>
    );
}

export default Cart;