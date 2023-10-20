import React, { CSSProperties } from 'react'
import Image from 'next/image'
import SpecsImage from "../../../public/email-designs/specs.png"
import Link from 'next/link'

export default function Discover() {
  return (
    <section className='w-full bg-pink-100 h-auto py-[2rem] grid justify-center'>
        <div className='text-center grid justify-center font-serif font-semibold sm:font-bold text-4xl sm:text-5xl'>
            <h1>Discover Our</h1>
            <h1>3D Lashes</h1>
        </div>
        <div className='grid justify-center text-center mt-[3rem]'>
            <h1 className='text-xl'>Why you need our</h1>
            <h1 className='font-bold text-2xl' style={slanted}>Self-Adhesive Eyelashes</h1>
        </div>
        <div className='sm:w-[500px] h-fit sm:h-full w-[fit] mx-[1rem] sm:mx-0'>
            <Image src={SpecsImage} className='w-full h-full' alt='Lashes specs'/>
        </div>

        <div className='text-center text-2xl font-normal'>
          <h1>Present your truest self</h1>
          <h1>to the world</h1>
        </div>

        <div className='flex justify-center'>
          <Link href='https://lash-pal.com/products/self-adhesive-eyelashes'>
          <button 
            className='
              mt-[2rem] 
              px-[1.5rem] 
              py-3 
              bg-gray-950
              text-white
              font-semibold 
              border-solid 
              border-[1px] 
              border-gray-600 
              shadow-lg 
              rounded-lg
            '
          >
            SHOP LASHES
          </button>
          </Link>
        </div>
    </section>
  )
}

const slanted: CSSProperties = {
    transform: 'skewX(-12deg)',
    
}

