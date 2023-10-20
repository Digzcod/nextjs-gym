import React, { CSSProperties } from 'react'
import Image from 'next/image'
import blinkWink from '../../../public/email-designs/eyelashes.png'
import StarRateSharpIcon from '@mui/icons-material/StarRateSharp';



export default function BlinkWink() {
  return (
    <>
        <div className='w-full bg-black grid justify-center items-center'>
            <p className='text-center text-white text-[1rem] sm:text-lg mt-auto  py-[1rem]'>
                LIMITED  OFFER: BUY 1 GET 2 FREE TODAY ONLY
            </p>
        </div>
    <section className='w-auto h-auto bg-white grid justify-center'>

        <div className='grid justify-center text-4xl sm:text-5xl font-serif font-extrabold mt-[3rem] mb-[2rem]'>
            <h1>Transform Your</h1>
            <h1>Blink In A Wink</h1>
        </div>

        <div className='text-center font-medium text-2xl'>
            <h1>Let&apos;s face the day looking and</h1>
            <h1>feeling our best, <span className='font-bold'>together</span></h1>
        </div>

        <div className='w-full sm:w-[500px] px-[1.5rem] sm:px-0'>
            <Image src={blinkWink} alt='lashes' className='w-screen h-auto' />
        </div>

        <div className='flex flex-grow justify-center text-lg sm:text-xl  font-medium mt-[-2.5rem]'>
          <p>
            *Discount auto-applied with code <span className='font-bold border-solid border-b-2 border-gray-200'>EMPOWERED</span>
          </p>
        </div>

        <div className='grid justify-center items-center mt-[2rem]'>
            <p>
                <StarRateSharpIcon className='text-violet-300 text-3xl sm:text-4xl'/>
                <StarRateSharpIcon className='text-violet-300 text-3xl sm:text-4xl'/>
                <StarRateSharpIcon className='text-violet-300 text-3xl sm:text-4xl'/>
                <StarRateSharpIcon className='text-violet-300 text-3xl sm:text-4xl'/>
                <StarRateSharpIcon className='text-violet-300 text-3xl sm:text-4xl'/>
            </p>

        </div>

        <div className='grid justify-center my-[.5rem]'>
            <div className='mb-[1rem]'>

            <p className='font-bold border-b-2 border-gray-500 text-xl sm:text-3xl' style={slanted}>
                Self-Adhesive Eyelashes
            </p>
            </div>
           
            <button className='py-[1rem] px-[1.5rem] font-semibold text-lg bg-violet-300 rounded-lg mt[1rem] mb-[5rem]'>
                SHOP LASHES
            </button>
        </div>

    </section>
    </>
  )
}

const slanted: CSSProperties = {
    transform: 'skewX(-13deg)'
}

