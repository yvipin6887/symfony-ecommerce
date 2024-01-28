import React from 'react'
import Layout from "../components/Layout"
import Header from '../components/Header'
import ProductWithCategory from '../components/products/ProductWithCategory';
   
function Shop() {
  
    return (
        <>
            <Header/>
            <Layout>
                <ProductWithCategory />
            </Layout>
        </>
    );
}
   
export default Shop;