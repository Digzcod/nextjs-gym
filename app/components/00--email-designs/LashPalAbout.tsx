'use client'
import React from 'react'
import Image from 'next/image'
import SecondImage from '../../../public/email-designs/girl image.png'

export default function LashPalAbout() {
    return (
            <section className='w-full bg-orange-50 sm:w-full sm:flex justify-between sm:h-auto h-fit'>
                <article className='ml-[4rem] text-2xl sm:flex items-center sm:mr-[2rem]  sm:mt-[3rem] hidden'>
                <div className='absolute  w-auto space-y-[2rem]'>
                    <p className=''>
                        You know that <br/><span className='font-bold' >confident feeling</span> <br/>that just make your day?
                    </p>
                    <p className='w-full'>That&rsquo;s what <span className='font-bold' >LashPal</span> <br /> is all about.</p>
                </div>
                </article>
                <div className='relative sm:bottom-[-22px] bottom-[-2.5rem] right[-25px] sm:w-[400px] sm:h-auto'>
                    <Image src={SecondImage} alt="LashPal Image" />
                </div>
            </section>
    );
}

