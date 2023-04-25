import React from 'react'
import ProductItem from './ProductItem'
import useFetchHook from '@/context/useFetchHook'

const FeaturedProducts = () => {
  const { data: products, loading } = useFetchHook({ endpoint: '/product/products' });
   if(loading){
    return <p>cargando productos</p>
   }
  return (
    <div className='h-full w-full flex justify-center mt-[20rem] '>
      <div className='h-full w-10/12 mx-auto'>
        <h2 className='mb-8 font-extrabold  text-3xl text-[#333]'>Featured Products</h2>
        <div className='grid grid-cols-3 gap-16'>
          {products.map(product =>(
            <ProductItem key={product.id} product={product}/>
          ))}
          
          
        </div>
      </div>      
    </div>
    
  )
}

export default FeaturedProducts
