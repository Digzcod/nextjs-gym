import React from "react";
import Image from "next/image";
import workingPic from "../../public/not-img/working page.svg";
import Link from "next/link";

export default function WorkingPage() {
  return (
    <section className="grid justify-center px-[2rem]">
      <div className="w-[28.5rem] h-[28.5rem] sm:w-[40rem] sm:h-[auto]">
        <Image src={workingPic} alt="working" className="w-full h-full" />
        <div className="grid">
          <p className=" text-xl sm:text-4xl text-green-500 font-medium block">
            I&apos;ve been working on this section to make it better! 
          </p>
          <p className=" text-sm sm:text-xl mt-3">
            It will available soon... 
          </p>
          <div className="mt-5 ml-[auto]">
            <Link href={"/"}>
              <p className="btn">Go Back to Main</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
