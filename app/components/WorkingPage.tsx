import React from "react";
import Image from "next/image";
import workingPic from "../../public/not-img/working page.svg";
import Link from "next/link";

export default function WorkingPage() {
  return (
    <section className="grid justify-center px-[2rem]">
      <div className="w-[30rem] h-[30rem] sm:w-[50rem] sm:h-[auto]">
        <Image src={workingPic} alt="working" className="w-full h-full" />
        <div className="relative">
          <p className=" text-xl sm:text-4xl text-green-500 font-medium">
            I&apos;ve working on this section to make you better!
          </p>
          <div className="mt-5">
            <Link href={"/"}>
              <p className="btn">Go Back to Main</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
