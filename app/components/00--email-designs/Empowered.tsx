import Link from 'next/link'
import React from 'react'

export default function Empowered() {
  return (
    <section className='w-auto h-auto sm:w-full grid justify-center items-center py-[2rem] bg-white'>
        <div className='grid justify-center text-center mt-10 font-medium sm:font-semibold text-[1.2rem] sm:text-[1.5rem] mb-[1.5rem]'>
            <p>Get 15% off your</p>
            <p>first order with code:</p>
        </div>

       
          <div className="border-dashed border-2 border-gray-400 flex justify-center py-[1rem] px-[2rem]">
            <h1 className='text-3xl font-extrabold'>
               EMPOWERED
            </h1>

          </div>

          <div className='grid justify-center mb-[2rem] w-auto'>

            <Link href='https://lash-pal.com/products'>
            <button className='mt-[2rem] sm:mt-[3rem] border-solid border-2 py-[1rem] px-[1.8rem] rounded-xl font-semibold bg-orange-300 hover:shadow-sm'>
                SHOP LASHES
            </button>
            </Link>
          </div>
    </section>
  )
}
