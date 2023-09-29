import React from 'react'
import Image from 'next/image'
import notFoundPic from "../public/not-img/404 Erro.svg"
import Link from 'next/link'


export default function PageNotFound() {
  return (
    <section className='mx-auto my-auto py-[5rem] px-[5rem] grid justify-center'>
        <div className='h-[25rem] w-[auto] sm:h-[30rem] sm:w-[auto] mt-[5rem]'>
            <Image src={notFoundPic} alt='stephen' className='h-full w-full'/>
        </div>
        <div className='mt-10 w-full flex justify-center'>
            <Link href={'/'}>
        <p className='btn'>
            Back to Home Page
        </p>
            </Link>
        </div>
    </section>
  )
}
