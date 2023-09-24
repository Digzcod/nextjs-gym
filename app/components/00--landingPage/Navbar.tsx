"use client";

import React, { useState } from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { AiTwotoneHome,  } from "react-icons/ai";
import { BsFillLayersFill, BsBookmarkStarFill } from "react-icons/bs";



export default function Navbar() {
  // const [itemOne, setItemOne] = useState(false);

  return (
    <>
      <nav className="navbar bg-white shadow h-[5rem font-medium flex justify-center space-x-3 py-4">
        <div className="flex items-baseline">
        <AiTwotoneHome className="text-gray-500  text-2xl font-semibold mr-[-.5rem]"/> 
          <button className="mx-3 text-lg font-medium my-1">
            Home
          </button>
        </div>
        <div className="flex items-baseline">
        <BsFillLayersFill className="text-gray-500 text-2xl font-semibold mr-[-.5rem]"/> 
          <button className="mx-3 text-lg font-medium my-1">
            Projects
          </button>
        </div>
        <div className="flex items-baseline">
          <button className="mx-3 text-lg font-medium my-1">
            Achievements
          </button>
        </div>
      </nav>
    </>
  );
}
