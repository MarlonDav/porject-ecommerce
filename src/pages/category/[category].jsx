import React from 'react'
import Layout from '../../../components/Layout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'



const Category = ({  }) => {

const router = useRouter()
   const { category } = router.query
   const[ Productos ,setProductos] = useState([])
   const getProductByCat = () => {
    fetch(process.env.NEXT_PUBLIC_API_URL + '/product/productcat/'+ category)
    .then(res => res.json())
    .then(res => setProductos(res.message))

  }
    useEffect(() => {
      if(category){
        getProductByCat(category)
      }
      
    },[category])

  return(
   <>
   <Layout>
        <div className='w-10/12 h-full mx-auto'>
        {Productos.map(producto => (
              <div key={producto._id}>

                <h2 className='text-center pt-16 text-2xl font-extrabold'>Categoria: <span className='font-extrabold text-red-500'>{producto.category}</span> </h2>


                <div className='grid grid-cols-3 gap-16 no-underline shadow-black shadow-lg p-5 hover:shadow-xl hover:shadow-red-500 transition-all'> 
                <div className='flex items-center justify-center flex-col gap-2' >
                 <h3 className='text-red-500 text-2xl capitalize mt-4'>{producto.name}</h3>
                <p>{producto.marca}</p>
                <p>{producto.price}</p>
                <img src={producto.image} alt={producto.name} /> 
               

                </div>
                    
                 <div>
                
                  </div>   
                </div>
                

              

                </div>
                ))}

            

                

            </div>
       
   </Layout>
     </>
  ) 
  
}

export default Category 