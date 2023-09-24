"use client";

import React, { useState } from "react";
import { AiTwotoneHome,  } from "react-icons/ai";
import { BsFillLayersFill } from "react-icons/bs";
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeIcon from '@mui/icons-material/DarkMode';




export default function Navbar() {
  // const [lightMode, setLightMode] = useState(false);

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
        <button>
          {/* {light ?<LightModeRoundedIcon/> :  <DarkModeIcon/>} */}
        </button>
      </nav>
    </>
  );
}
