import React from 'react';
import { SecondaryButton } from './buttons/Buttons';

const SimpleCard = ({children}) => {
    return (
        <div class="block my-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className='p-2'>
                {children}
            </div>
        </div>
    );
}

const ProductCart = ({products, className = ''}) => {
    

    return (
            <>
            { products && products.map((data, index) => (
                <>
                    <div className={`grid grid gap-2.5 content-start ${className}`}>
                        <div className="relative overflow-hidden group  max-w-[291px] max-h-[300px] rounded-lg">
                            <img className="transform transition duration-1000 hover:scale-125" src={data.image} alt={data.title} width="291" height="300"/>
                        </div>
                        <div className="flex content-start">
                            <p className="text-base">{data.title}</p>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between items-center text-gray-900'>
                            <span className="text-base font-semibold text-lg">${data.price}</span>
                            <div>
                                <SecondaryButton>
                                    Add to cart
                                </SecondaryButton>
                            </div>
                        </div>
                    </div>
                </>
            ))}
        </>
    );
}

export {
    SimpleCard,
    ProductCart
};