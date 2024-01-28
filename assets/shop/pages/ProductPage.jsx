import React from "react";
import Layout from "../components/Layout"
import Header from '../components/Header'
import Footer from '../components/Footer';
import AddQuantity from "../components/AddQuantity";
import WhatsAppOrder from "../components/buttons/WhatsAppOrder";

const ProductPage = () => {
    return (
        <>
            <Header/>
                <Layout className="mt-10">
                    <div className="flex gap-10 px-[16px] py-[16px] max-1180:flex-wrap">
                        <div className="flex gap-[30px] h-max sticky top-[30px] max-1180:hidden">
                            <div className="flex-24 justify-center place-content-start h-509 overflow-x-hidden overflow-y-auto flex gap-[10px] max-w-[100px] flex-wrap">
                                <div className="">
                                    <img className="min-w-[100px] rounded-[12px]" src="/default/images/product-4.webp" alt="" />
                                </div>
                                <div className="">
                                    <img className="min-w-[100px] rounded-[12px]" src="/default/images/product-4.webp" alt="" />
                                </div>
                            </div>
                            <div className="max-w-[560px] max-h-[609px]">
                                <div className="">
                                    <img className="min-w-[450px] rounded-[12px]" src="/default/images/product-4.webp" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="grid gap-2">
                                <span className="text-2xl font-bold leading-7 text-gray-900">
                                    Blure shirt
                                </span>
                                <span>$67</span>
                                    <p className="">
                                    Elevate your style with our Black & White Colour Block Dress. This fashion-forward piece black bold and whiteand hues to create an eye-catching ensemble. Tailored in a relaxed fit for comfort, the dress offers an aesthetically pleasing silhouette. This dress is the ideal addition to your wardrobe for both formal and casual outings.
                                    </p>
                            </div>
                            <div className="flex gap-[15px] max-w-[470px] mt-[30px]">
                                <AddQuantity/>
                                <WhatsAppOrder />
                            </div>
                        </div>
                    </div>
                </Layout>
            <Footer/>
        </>
    );
}

export default ProductPage;