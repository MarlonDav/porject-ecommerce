import React, { useState, useEffect, useRef } from 'react'
import Img from 'next/image'
import { AiOutlineVerticalRight, AiOutlineVerticalLeft } from "react-icons/ai"

const sliderProducts = [
  "/slider42.jpg",
  "/slider2.jpg",
  "/slider32.jpg",
  "/slider52.jpg" 
];

let count = 0;
let slideInterval;

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  const [sliderPause, setSliderPause] = useState(true);

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
     // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    console.log('startSlider')
    if(sliderPause === true){
        slideInterval = setInterval(() => {
      handleOnNextClick();
      setSliderPause(false)
    }, 3000);

    }
  
  };

  const pauseSlider = () => {
    console.log('pauseSlider')
    setSliderPause(true)
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % sliderProducts.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = sliderProducts.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  return (
    <div   onMouseEnter={ pauseSlider } ref={slideRef} className="h-[500px] w-full flex justify-center mt-16 mb-[20rem]">
     
        <Img src={sliderProducts[currentIndex]} alt="" width={1660} height={500}className='object-cover rounded-xl'/>
        <div className='absolute top-[20rem] left-[45rem] flex flex-col items-center gap-4'>
          <span className='text-white font-extrabold text-4xl'>!Arma tu propio <span className='text-red-500'>PC GAMER¡</span></span>
          <span className='text-white font-extrabold text-3xl'>A tan solo un click</span>
          <button className='mt-6 bg-red-500 text-[#efefef] px-8 py-2 rounded-xl text-[18px]
          transition-all hover:bg-orange-600'>Armalo ahora</button>
        </div>
      

      <div className="absolute w-full top-[20rem]  px-3 flex justify-between items-center">
        <button
          className="bg-red-500 translate-x-11 text-white p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnPrevClick}
        >
          <AiOutlineVerticalRight size={30} />
        </button>
        <button
          className="bg-red-500 text-white -translate-x-11 p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
          onClick={handleOnNextClick}
        >
          <AiOutlineVerticalLeft size={30} />
        </button>
      </div>
    </div>
  );
}