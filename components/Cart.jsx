import React from 'react'
import useCartContext from '../context/cartContext'
import { AiOutlineClose } from 'react-icons/ai'

const Cart = () => {
    const { cartItems, removeCartItem } = useCartContext()


   
    
    return(
        <div className=' min-w-[275px] h-full px-3 py-6 bg-white text-[#333] rounded-lg shadow-lg cursor-pointer'>
            <div>
                <h2 className='tex-center text-2xl'> Productos en carrito </h2>
                    <div className='max-h-[225px] overflow-auto flex flex-col gap-8 my-8'>
                        { cartItems?.length > 0 ? (
                            cartItems?.map((item) => (

                            <div key={item._id} className='flex items-center gap-8'>
                                <div>
                                    <img width={75} height={75} src={item.image}/>
                                </div>
                                <div>
                                    <h3>{item.name}</h3>
                                    <span>{item.quantity} X ${item.price} </span>
                                </div>
                                <AiOutlineClose size={20} onClick={()=> removeCartItem(item)}/>

                            </div>

                            ))
                        ): <span className='text-red-500 ml-2 font-extrabold'>Carrito vacio!</span> }
                    </div>
                    <span className='inline-block'>Total: <span>${cartItems.reduce((a, b) => a + b.price * b.quantity, 0)}</span></span>
                    <span className='block max-w-max mt-8 px-6 py-1 bg-red-400 text-[#efefef] rounded-lg'>Checkout</span>
               
            </div>
        </div>
    )
}
export default Cart