import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer className='h-full w-full flex justify-center mt-[10rem] pb-12'>
      <div className='h-full w 10/12 grid grid-cols-3 justify-between'> 
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl mb-8 text-red-600'>FAQ</h2>
          <span>Donde nos encuetras</span>
          <span>Como funcionamos</span>    
          <span>Refund policy</span>      
        </div>
        <div  className='flex flex-col gap-4'>
          <h2 className='text-2xl mb-8 text-red-600'>Contacts</h2>
          <span>Whatsapp: +57 322 4396169</span>
          <span><Link href='https://www.facebook.com/chepelin.technology?mibextid=ZbWKwL'> <BsFacebook/> </Link></span>
          <span><Link href='https://instagram.com/chepelintechnology?igshid=YmMyMTA2M2Y='> <BsInstagram/> </Link></span>
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl mb-8 text-red-600'>politicas de privacidad</h2>
          <p>Recopilamos información personal, como nombres y direcciones de correo electrónico, cuando los usuarios se registran en nuestro sitio web, hacen una compra o se suscriben a nuestro boletín informativo. 
            Utilizamos esta información para procesar las órdenes, enviar boletines informativos y mejorar la experiencia del usuario en nuestro sitio web. 
            No compartimos esta información con terceros, excepto en los casos en que sea necesario para cumplir con la ley o con una solicitud de autoridades competentes. 
            Utilizamos cookies y otras tecnologías de seguimiento para recopilar información sobre el uso de nuestro sitio web y personalizar la experiencia del usuario. 
            Los usuarios pueden optar por no aceptar cookies ajustando la configuración de su navegador.
            </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer