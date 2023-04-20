import Image from 'next/image'

import React from 'react'
import {AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className= 'bg-gray-400 text-[#efefef] h-[60px] w-full py-2 px-6 flex justify-center'>
      <div className='h-full w-10/12 my-auto flex justify-between items-center'>
        <h2>        
          <Image src="/logo.png" alt="" width={500} height={500}/>
          
          </h2>
          <ul className= 'flex justify-center items-center gap-6 text-[#efefef] text-[18px]'>
            <li className='cursor-pointer transition-all hover:text-[#efefef6]'>Home</li>
            <li className='cursor-pointer transition-all hover:text-[#efefef6]'>Hero</li>
            <li className='cursor-pointer transition-all hover:text-[#efefef6]'>Categories</li>
            <li className='cursor-pointer transition-all hover:text-[#efefef6]'>Featured</li>
            <li className='cursor-pointer transition-all hover:text-[#efefef6]'>Contacts</li>
          </ul>
          <div> 
            <div>
              <input type="text" placeholder='Search'></input>
              <AiOutlineSearch/>
            </div>
            <div>
              <AiOutlineShoppingCart size={30}/>
              <span>0</span>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar