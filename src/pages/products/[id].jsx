import { useState } from "react"
import Layout from "../../../components/Layout"
import Image from "next/image"
import { AiFillShopping } from "react-icons/ai"
import { useRouter } from "next/router"
import { useEffect } from "react"
import useCartContext from "../../../context/cartContext"



const ProductDetail = ({ }) => {
  const router = useRouter()
  const { id } = router.query
  const[producto,setProducto] = useState({})
  const getProductById = () => {
    fetch(process.env.NEXT_PUBLIC_API_URL + '/product/productid/'+ id)
    .then(res => res.json())
    .then(res => setProducto(res.message))

  }
    useEffect(() => {
      if(id){
        getProductById(id)
      }
      
    },[id])


   const[quantity, setQuantity] = useState(1) ;
   const { addToCart } = useCartContext()
   const addQuantity = (command) => {
    setQuantity(prev =>{
      if(command === 'dec'){
        if(prev <= 1 ) return 1
        else return prev - 1 
      }

      if(command === 'inc'){
        return prev + 1
      }
    })
  

   }

  return (
    <>

     <Layout>
      <div className="py-20 h-full w-full flex justify-center">
        <div className="h-full w-10/12 flex justify-between">
          <div className='flex-1'>
            <img src= {producto?.image} width="500" height= "1250" alt="" ></img>
          </div>       
        <div className='flex-1 flex flex-col gap-8'>
          <h2 className='text-[20px] font-extrabold text-red-500'>Nombre del producto:<span className='text-black ml-2'>{producto?.name}</span></h2>
          <span className="text-[20px] font-extrabold flex items-center gap-4">Categoria: <span className="px-4 py-2 text-[#efefef] text-[16px] bg-red-500 rounded-xl">{producto?.category}</span></span>
          <p className="text-[20px] font-extrabold text-black-500">Descripcion: <span className="text-black-500">{producto?.detalles}</span></p>
          <div className="flex gap-6 items-center">
            <span onClick={() => addQuantity('dec')} className="bg-slate-300 px-4 py-2 text-[18px]">-</span>
            <span>{quantity}</span>
            <span onClick={() => addQuantity('inc')} className="bg-slate-300 px-4 py-2 text-[18px]">+</span>
          </div>
          <span className="text-[20px] font-extrabold text-black-500" >Precio: <span >$ {producto?.price} </span></span>
          <button onClick={() => addToCart({...producto, quantity} ) } className="mt-auto py-2 px-5 rounded-lg gap-4 flex items-center bg-red-500 text-[#efefef] max-w-max hover:bg-orange-500 transition-all rounded-lg">añadir al carrito<AiFillShopping/></button>
         </div>
      </div> 
 </div>
     </Layout>
    </>
  )
}
export default ProductDetail

