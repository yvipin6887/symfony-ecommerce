import React from 'react'
import Layout from "../components/Layout"
import Header from '../components/Header'
import ProductHorizantal from '../components/products/ProductHorizantal';
import ProductWithCategory from '../components/products/ProductWithCategory';

   
function NewAprrival() {
  
    return (
        <>
            <Header/>
            <Layout>
                <ProductWithCategory />
            </Layout>
        </>
    );
}
   
export default NewAprrival;