import React from "react";
import { ProductCart } from "../Card";
import useProduct from "../../models/useProduct";

const ProductHorizantal = ({title, dataKey, limit = 25}) => {
    const {loading, data} = useProduct(limit);
    console.log(data,'data')
    const products = [
        {
            productName: 'All-in-One Smart Casual Outfit Set',
            price: 168,
            image: '/default/images/product-1.webp'
        },
        {
            productName: 'Arctic Bliss Stylish Winter Scarf',
            price: 200,
            image: '/default/images/product-2.webp'
        },
        {
            productName: 'Arctic Cozy Knit Unisex Beanie',
            price: 240,
            image: '/default/images/product-3.webp'
        },
        {
            productName: 'Arctic Frost Winter Accessories Bundle',
            price: 230,
            image: '/default/images/product-4.webp'
        },
    ];

    return (
        <div class="container mt-2">
            <div className="flex justify-between">
                {title}
                <div className="flex gap-5 justify-between items-center">
                    <span>Previous</span>
                    <span>Next</span>
                </div>
            </div>
            <div className="flex gap-8 mt-[40px] overflow-auto scroll-smooth scrollbar-hide ">
                <ProductCart className="min-w-[291px]" products={data}/>
            </div>
        </div>
    );
}

export default ProductHorizantal;