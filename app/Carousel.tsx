
import React from 'react'
import Image from 'next/image'
import jsLogo from "../public/logo-javascript.svg"
import tsLogo from "../public/typescript-2.svg"
import reactLogo from "../public/React-icon.svg.png"
import nextsjsLogo from "../public/nextjs.png"
import muiLogo from "../public/material-ui-1.svg"
import tailwindLogo from "../public/tailwind-css-1.svg"
import Slider from "react-slick";


export default function Carousel() {

  return (
      
      <section className='carousel rounded-box sm:space-x-8 flex justify-center space-x-4'>
        <div className='carousel-item w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]'>
            <Image src={jsLogo} alt='js' className='w-full h-full' placeholder='empty' />
        </div>
        <div className='carousel-item w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]'>
            <Image src={tsLogo} alt='js' className='w-full h-full' placeholder='empty'/>
        </div>
        <div className='carousel-item w-[60px] h-[50px] sm:w-[70px] sm:h-[60px]'>
            <Image src={reactLogo} alt='js' className='w-full h-full' placeholder='empty'/>
        </div>
        <div className='carousel-item w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]'>
            <Image src={nextsjsLogo} alt='js' className='w-full h-full' placeholder='empty'/>
        </div>
        <div className='carousel-item w-[50px] h-[50px] sm:w-[70px] sm:h-[70px]'>
            <Image src={muiLogo} alt='js' className='w-full h-full' placeholder='empty'/>
        </div>
        <div className='carousel-item w-[50px] h-[50px]  sm:w-[70px] sm:h-[70px]'>
            <Image src={tailwindLogo} alt='js' className='w-full h-full' placeholder='empty'/>
        </div>
    </section>
  )
}
