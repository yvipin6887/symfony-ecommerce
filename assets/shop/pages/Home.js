import React from 'react'
import Layout from "../components/Layout"
import Banner from '../components/layouts/Banner';
import Header from '../components/Header'
import Footer from '../components/Footer';
import CarouselDefault from '../components/CarouselDefault';
import { SimpleCard} from '../components/Card';
import ProductHorizantal from '../components/products/ProductHorizantal';
import { SecondaryButton } from '../components/buttons/Buttons';

   
function Home() {
    const carouselData = [
        {
            image: '/default/images/banner-1.webp',
            imageAlt: 'image 1'
        },
        {
            image: '/default/images/banner-2.webp',
            imageAlt: 'image 2'
        },
        {
            image: '/default/images/banner-3.webp',
            imageAlt: 'image 3'
        },
        {
            image: '/default/images/banner-4.webp',
            imageAlt: 'image 4'
        },
    ];
  
    return (
        <>
            <Header/>
                <Banner>
                    <CarouselDefault images={carouselData}/>
                </Banner>
                <Layout>
                    <div className='flex gap-5'>
                        <SimpleCard>
                            <a href='#' >
                                <img src='/default/images/banner-winter.webp' alt='Winter Collections' className="h-full w-full object-cover" />
                            </a>
                        </SimpleCard>
                        <SimpleCard>
                            <a href='#' >
                                <img src='/default/images/banner-summer.webp' alt='Summer Collections' className="h-full w-full object-cover" />
                            </a>
                        </SimpleCard>
                        <SimpleCard>
                            <a href='#' >
                                <img src='/default/images/banner-shoes.webp' alt='Shoes Collections' className="h-full w-full object-cover" />
                            </a>
                        </SimpleCard>
                    </div>

                    <div className='flex mt-[50px]'>
                        <ProductHorizantal title={<h1>New Arrival </h1>} dataKey="new" limit={4}/>
                    </div>
                    <div className='flex mt-[20px]'>
                        <SecondaryButton className='py-[11px] px-[43px] m-auto'>
                            <a  href="/new-aprrival" className='text-gray-500  no-underline text-sm font-medium hover:text-white'>View All</a>
                        </SecondaryButton> 
                    </div>
                    <div className='flex mt-[50px]'>
                        <ProductHorizantal title={<h1>All Products</h1>} dataKey="all" limit={4}/>
                    </div>
                    <div className='flex mt-[20px]'>
                        <SecondaryButton className='py-[11px] px-[43px] m-auto'>
                            <a  href="#" className='text-gray-500  no-underline text-sm font-medium hover:text-white'>View All</a>
                        </SecondaryButton> 
                    </div>
                    <div className="container">
                        <h2 className="text-center mt-5 mb-3">Home Page</h2>
                    </div>
                </Layout>
            <Footer/>
        </>
    );
}
   
export default Home;