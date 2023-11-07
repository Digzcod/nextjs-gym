import React from "react";
import Image from "next/image";
import jsLogo from "../public/home-img/logo-javascript.svg";
import tsLogo from "../public/home-img/typescript-2.svg";
import reactLogo from "../public/home-img/React-icon.svg.png";
import nextsjsLogo from "../public/home-img/nextjs.png";
import muiLogo from "../public/home-img/material-ui-1.svg";
import tailwindLogo from "../public/home-img/tailwind-css-1.svg";

export default function Carousel() {
  const imageData = [
    { src: jsLogo, alt: "js" },
    { src: tsLogo, alt: "ts" },
    { src: reactLogo, alt: "react" },
    { src: nextsjsLogo, alt: "nextjs" },
    { src: muiLogo, alt: "mui" },
    { src: tailwindLogo, alt: "tailwind" },
  ];

  return (
    <section className="carousel rounded-box sm:space-x-8 flex flex-wrap justify-center space-x-4">
      {imageData.map(({ src, alt }) => (
        <>
          <div className="carousel-item w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]">
            <Image
              src={src}
              key={src}
              alt={alt}
              className="w-full h-full"
              placeholder="empty"
            />
          </div>
        </>
      ))}
    </section>
  );
}
