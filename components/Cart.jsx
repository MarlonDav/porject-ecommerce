import React from 'react'
import useCartContext from '../context/cartContext'

const Cart = () => {
    const { cartItems, removeCartItem } = useCartContext()

    
    return(
        <div>Cart</div>
    )
}
export default Cart