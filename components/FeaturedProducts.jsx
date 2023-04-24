import React from 'react'
import ProductItem from './ProductItem'

const FeaturedProducts = () => {
  return (
    <div className='h-full w-full flex justify-center mt-[20rem] '>
      <div className='h-full w-10/12 mx-auto'>
        <h2 className='mb-8 text-3xl text-[#333]'>FearuredProducts</h2>
        <div className='grid grid-cols-3 gap-16'>
          <ProductItem/>
          
        </div>
      </div>      
    </div>
    
  )
}

export default FeaturedProducts
