import React from "react";
import useProduct from "../../models/useProduct";
import { ProductCart } from "../Card";
import CategoryView from "../category/CategoryView";

const ProductWithCategory = ({limit = 25}) => {
    const {loading, data} = useProduct(limit);

    return (
        <div className="flex gap-[40px]">
             <div class="min-w-[265px]">
                <CategoryView />
             </div>
             <div class="flex-1">
                <div className="max-md:hidden">
                    01
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <ProductCart className="min-w-[250px] min-h-[281px]" products={data}/>
                </div>
             </div>
        </div>
    );
}

export default ProductWithCategory;