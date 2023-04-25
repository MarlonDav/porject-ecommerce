import React from 'react'
import Link from 'next/link'
const ProductItem = ({ product }) => {
  return (
 <Link href={`/products/${product.id}`} className='no-underline shadow-black shadow-lg p-5 hover:shadow-xl hover:shadow-red-500 transition-all'> 
  <div>
      <div>
        <img src={product.image} width={300} height={300}/>
      </div>
       <div className='flex items-center justify-center flex-col gap-2'>
        <h3 className='text-red-500 text-2xl capitalize mt-4' >{product.name}</h3>
        <span className='text-[18px]'>{product.category}</span>
        <span className='text-[#555]'>{product.price}</span>
       </div>
    </div>
 </Link>
   
   
  )
}

export default ProductItem