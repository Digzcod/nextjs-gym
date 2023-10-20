import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <section className='w-auto  bg-pink-200 px-[1rem] sm:grid sm:justify-center'>
        <div className='py-[2.5rem]'>
            <h1 className='text-4xl font-normal font-sans text-gray-700'>
                LashPal
            </h1>
        </div>

        <div className='mb-[1rem]'>
            <Link href='https://lash-pal.com'>
            <p className='text-md font-semibold'>
                lash-pal.com
            </p>
            </Link>
        </div>

        <div className='w-auto text-xl sm:space-x-[1.5rem] sm:flex space-y-1 sm:space-y-0'>
            <p className='text-lg font-medium'>
                Home
            </p>
            <p className='text-lg font-medium'>
                Shop
            </p>
            <p className='text-lg font-medium'>
                Contact Us
            </p>
            <p className='text-lg font-medium'>
                Track Your Order
            </p>
            <p className='text-lg font-medium'>
                Instagram
            </p>
            <p className='text-lg font-medium'>
                TikTok
            </p>
        </div>
        <div className='flex justify-center mt-[4rem] text-lg mb-3'>
            <p className='font-semibold '>&copy;{new Date().getFullYear()} LashPal. All Rights Reserved</p>
        </div>
        <div className='grid justify-center font-medium text-md pb-[3rem]'>
            <p className='font-medium text-lg'>No longer want to receive these emails?</p>
            <div className='flex justify-center space-x-3'>
                <p className='border-b border-gray-500'>Unsubscribe</p> 
                <span>or</span>
                <p className='border-b border-gray-500'>Manage Preference</p>
            </div>
        </div>

    </section>
  )
}
