import Image from "next/image";
import React from "react";
import FrontendPic from "../../../public/not-img/undraw_developer_activity_re_39tg.svg";

export default function LandingPage() {
  return (
    <section className="min-h-min min-w-min md:flex md:justify-center items-center mx-auto">
      <div className="w-[25rem] h-[25rem] overflow-hidden m-[3rem] sm:w-[29.5rem] sm:h-[29.5rem]">
        <Image
          alt="Web developer Digz"
          src={FrontendPic}
          className="w-full h-full object-cover md rounded-lg"
        />
      </div>
      <div>
        <p className="font-medium text-lg sm:text-[1.5rem]">I&apos;m Stephen</p>
        <p className="text-3xl lg:text-[2.5rem] font-bold sm:font-medium mt-1 w-full">
          Front-end Web Developer
        </p>
        <p className="font-semibold text-lg mb-5">ReactJS | NextJS</p>
      </div>
    </section>
  );
}
