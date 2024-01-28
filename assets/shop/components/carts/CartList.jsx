import React from "react";
import useCart from "../../models/useCart";

const CartList = () => {
    const {loading, data} = useCart();
    console.log(data,data)
    return (
        <div className="flex gap-[71px] mt-[30px] pb-[30px]">
            <div className="grid gap-[25px] flex-1">
                {data && data.map((value, index) => (
                    <div className="grid gap-y-[25px]">
                        <div className="flex gap-x-[10px] justify-between flex-wrap pb-[18px] border-b-[1px] border-[#E9E9E9]">
                            <div className="flex gap-x-[20px]">
                                <a href="#">
                                    <img className="h-[110px] min-w-[110px] max-w[110px] rounded-[12px]" src="/default/images/product-1.webp" />
                                </a>
                                <div>
                                    <a href="#">
                                        <p>productName</p>
                                    </a>
                                    <div className="flex gap-[10px]">
                                        <span className="">
                                            -
                                        </span>
                                        <p>1</p>
                                        <span className="">+</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                price
                            </div>
                        </div>
                    </div>
                ))}
                
            </div>
            <div className="w-[471px] max-w-full">
                <p className="text-[26px] font-medium">Cart Summary</p>
            </div>
        </div>
    );
}

export default CartList;