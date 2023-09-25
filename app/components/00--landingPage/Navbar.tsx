'use client'
import React, { useEffect, useState } from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillLayersFill } from "react-icons/bs";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface ThemesProps {
  corporate: string;
  dark: string;
}

const themes: ThemesProps = {
  corporate: 'corporate',
  dark: 'dark'
}

function getLocalStorage() {
  if(typeof window !== 'undefined') {
    return localStorage.getItem('theme') || themes.corporate
  }
  return themes.corporate
}

export default function Navbar() {
  const [theme, setTheme] = useState(getLocalStorage());

  function handleTheme() {
    const {corporate, dark} = themes
    const newTheme =theme === corporate ? dark : corporate
    setTheme(newTheme)
  }
  
  useEffect(function(){
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  },[theme])

  return (
    <>
      <nav className="navbar shadow-md h-[5rem font-medium flex justify-center space-x-3 py-4">
        <div className="flex items-baseline">
          <AiTwotoneHome className="text-gray-500  text-2xl font-semibold mr-[-.5rem]" />
          <button className="mx-3 text-lg font-medium my-1">Home</button>
        </div>
        <div className="flex items-baseline">
          <BsFillLayersFill className="text-gray-500 text-2xl font-semibold mr-[-.5rem]" />
          <button className="mx-3 text-lg font-medium my-1">Projects</button>
        </div>
        <div className="flex items-baseline">
          <button className="mx-3 text-lg font-medium my-1">
            Achievements
          </button>
        </div>
        <div className="navbar-end">
          {/* {light ?<LightModeRoundedIcon/> :  <DarkModeIcon/>} */}

          <label className="swap swap-indeterminate">
            <input type="checkbox" onChange={handleTheme} />
            <LightModeRoundedIcon className="swap-on" />
            <DarkModeIcon className="swap-off" />
          </label>
        </div>
      </nav>
    </>
  );
}
