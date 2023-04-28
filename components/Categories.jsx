import React from 'react'
import Link from 'next/link'
import Img from 'next/image'
import audifonos from '../public/audifonos.jpg'
import diademas from '../public/diademas.jpg'
import Aros from '../public/Aros.jpg'
import cargador from '../public/cargador.jpg'
import disco from '../public/disco.jpg'
import useFetchHook from '@/hook/useFetchHook'


const Categories = () => {

  return (
    <div className='h-full w-full flex justify-center'>
      <div className='h-full w-10/12'>
        
        <h2 className='font-extrabold mb-8 text-3xl text-[#333]'>Categorias</h2>
        <div className='h-full w-full flex items-center justify-between'>
          <Link href='/category/audifonos' className="h-[325px] w-[325px] relative" > 
          <Img  src={audifonos} alt="" className="h-full w-full object-cover"/>      
          <span className='absolute bottom-0 left-0 bg-red-500 px-6 py-2 text-white'>Audifonos bluethoot</span>
          </Link>
          <Link href='/category/diademas'className="h-[325px] w-[325px] relative"> 
          <Img src={diademas}alt="" className="h-full w-full object-cover"/>
          <span className='absolute bottom-0 left-0 bg-red-500 px-6 py-2 text-white'>Diademas</span>
          </Link>
          <Link href='/category/Aros'className="h-[325px] w-[325px] relative" > 
          <Img src={Aros}alt="" className="h-full w-full object-cover"/>
          <span className='absolute bottom-0 left-0 bg-red-500 px-6 py-2 text-white'>Aros de luz</span>
          </Link>
          <Link href='/category/cargador' className="h-[325px] w-[325px] relative"> 
          <Img src={cargador}alt="" className="h-full w-full object-cover"/>
          <span className='absolute bottom-0 left-0 bg-red-500 px-6 py-2 text-white'>Cargadores carga rapida</span>
          </Link>
          <Link href={`/category/disco`}  className="h-[325px] w-[325px] relative"> 
          <Img src={disco}alt="" className="h-full w-full object-cover"/>
          <span className='absolute bottom-0 left-0 bg-red-500 px-6 py-2 text-white'>Discos Duros de esatdo solido</span>
          </Link>

        </div>
        </div>
      </div>
  )
}

export default Categories
