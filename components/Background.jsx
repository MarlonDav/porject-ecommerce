import React from 'react'
import Img from 'next/image'
import bakground2 from '../public/bakground2.jpg'

const Background = () => {
  return (
    <div className='h-[500px] w-full mt-16 mb-[20rem]'>
      <div className='realtive h-[500px] w-10/12 mx-auto'>
      <Img className='h-[500px] object-cover rounded-lg'src={bakground2}/>
      <div className='absolute top-[13rem] left-[45rem]  flex flex-col items-center gap-20'>
        <span className='text-white text-[30px] font-extrabold '>Arma tu propio<span className='text-red-500'>   PC gaming </span></span>
        <span className='text-white  text-[25px]  font-extrabold'>Solo haciendo un CLICK!</span>
        <button className='mt-6 font-extrabold text-[#efefef] px-8 py-2 rounded-full text-[18px]
       transition ease-in-out delay-150 bg-black-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300'>Ver ahora</button>
      </div>
      </div>
    </div>
  )
}

export default Background