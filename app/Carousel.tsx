
import React from 'react'
import Image from 'next/image'
import jsLogo from "../public/JavaScript-logo.png"
import tsLogo from "../public/typescript-2.svg"
import reactLogo from "../public/React-icon.svg.png"
import nextsjsLogo from "../public/nextjs.png"
import muiLogo from "../public/mui.png"
import tailwindLogo from "../public/tailwindcss-ar21.png"
import Slider from "react-slick";


export default function Carousel() {

  return (
      
      <section className='carousel rounded-box sm:space-x-8 flex justify-center space-x-4'>
        <div className='carousel-item w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]'>
            <Image src={jsLogo} alt='js' className='w-full h-full' placeholder='empty' />
        </div>
        <div className='carousel-item w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]'>
            <Image src={tsLogo} alt='js' className='w-full h-full' placeholder='empty'/>
        </div>
        <div className='carousel-item w-[55px] h-[50px] sm:w-[75px] sm:h-[70px]'>
            <Image src={reactLogo} alt='js' className='w-full h-full' placeholder='empty'/>
        </div>
        <div className='carousel-item w-[70px] h-[50px] sm:w-[90px] sm:h-[70px]'>
            <Image src={nextsjsLogo} alt='js' className='w-full h-full' placeholder='empty'/>
        </div>
        <div className='carousel-item w-[70px] h-[50px] sm:w-[80px] sm:h-[70px]'>
            <Image src={muiLogo} alt='js' className='w-full h-full' placeholder='empty'/>
        </div>
        <div className='carousel-item w-[90px] h-[50px]  sm:w-[110px] sm:h-[70px]'>
            <Image src={tailwindLogo} alt='js' className='w-full h-full' placeholder='empty'/>
        </div>
    </section>
  )
}
