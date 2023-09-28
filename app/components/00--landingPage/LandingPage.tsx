import Image from "next/image";
import React from "react";
import FrontendPic from "../../../public/undraw_Developer.png";

export default function LandingPage() {
  return (
    <section className="min-h-min min-w-min  md:flex md:justify-center items-center  mx-auto">
      <div className="w-[25rem] h-[25rem] overflow-hidden m-[3rem] sm:w-[32.5rem] sm:h-[32.5rem]">
        <Image
          alt="Web developer Digz"
          src={FrontendPic}
          className="w-full h-full object-cover md rounded-lg"
          placeholder="blur"
        />
      </div>
      <div>
        <p className="font-medium text-lg sm:text-[1.5rem]">I&apos;m Stephen</p>
        <p className="text-3xl lg:text-5xl font-bold sm:font-medium mt-1 w-full">
          Front-end Developer
        </p>
        <p className="font-semibold text-lg mb-5">ReactJS | NextJS</p>
      </div>
    </section>
  );
}
