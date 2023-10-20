import React from "react";
import Image from "next/image";
import TopImg from "../../../public/email-designs/top1.png";
import Link from "next/link";

export default function TopLaspal() {
  return (
    <section className="grid justify-center ">
      <div className="h-[4rem]  sm:w-full bg-pink-200 grid justify-center items-center px-5 z-40">
        <p className="text-gray-900 font-semibold">
          FREE SHIPPING ON ORDERS OVER $50 USD
        </p>
      </div>
      <div className="mt-[-4rem]">
          <div className="relative" >
          <h3
            className="
                   absolute 
                   top-[6.5rem] 
                   left-[14.5rem]
                   text-4xl
                   sm:top-[8rem]
                   sm:left-[24.5rem]  
                   sm:text-6xl
                   font-[500] 
                   text-gray-200
                   font-mono
                   z-10
                  "
          >
            Lash Pal
          </h3>
        </div>

        <div className='w-fit sm:max-w-[820px] sm:h-[50rem] h-auto  overflow-hidden relative bottom-[-1rem]  bg-pink-100'>
            <Image src={TopImg} className=" sm:w-full sm:h-fit relative top-[4rem] " alt="lash Pal" />
        </div>
        <div className="relative w-auto h-auto  pl-[-1.5rem] sm:pl-[0rem]">
            <h1 className=" text-[220%] bottom-[9.5rem] sm:text-[5.5rem] absolute sm:bottom-[15.5rem] left-[9.5rem] text-gray-50 font-serif text-center">
                <span className="">15%</span>
                <span className="pl-[1.5rem]">OFF</span>
            </h1>
            <h1 className="
                absolute 
                text-[320%] 
                bottom-[7rem] 
                sm:text-[5rem] 
                sm:bottom-[11rem] 
                font-extrabold 
                left-[10.5rem] 
                text-orange-300 
                font-serif"
                >
              TODAY
            </h1>
            <Link href='https://lash-pal.com'>
            <button 
            className="
            shadow-md 
            absolute 
            py-3 
            px-[1rem]
            font-semibold 
            sm:text-2xl 
            sm:px-[1rem] 
            rounded-lg 
            bottom-[2rem] 
            sm:bottom-[5rem]
            left-[10.5rem] 
            bg-gray-50 
            tracking-wider
            hover:bg-gray-100
            hover:font-semibold
            flex-grow-1
            ">
                SHOP LASHES
            </button>
            </Link>
        </div>
      </div>
    </section>
  );
}
