import React from 'react'
import ProductCard from '../ProductCard/ProductCard';

const NewProduct = () => {
    return (
        <div className='mt-16 mx-8 '>
            <h2 className='text-sm md:text-xl lg:text-2xl font-light mx-2 md:mx-4 h-4 md:h-6 lg:h-8 flex items-center cursor-pointer hover:text-[#AA988A]'>
                New Arrivals
            </h2>
            <div className='mt-6 mx-2 md:mx-4'>
                <ProductCard />
            </div>
        </div>
    )
}

export default NewProduct;