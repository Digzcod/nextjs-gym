'use client'
import React, { useEffect, useState, useCallback, memo } from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillLayersFill } from "react-icons/bs";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from "next/link";

interface ThemesProps {
  corporate: string;
  dark: string;
}

const themes: ThemesProps = {
  corporate: 'corporate',
  dark: 'dracula'
}

function getLocalStorage() {
  if(typeof window !== 'undefined') {
    return localStorage.getItem('theme') || themes.corporate
  }
  return themes.corporate
}


export default memo( function Navbar() {
  const [theme, setTheme] = useState(getLocalStorage());
  const [active, setActive] = useState('')

  const handleTheme = useCallback(function handleTheme() {
    const {corporate, dark} = themes
    const newTheme = theme === corporate ? dark : corporate
    setTheme(newTheme)
  }, [theme])
  
  useEffect(function(){
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  },[theme])



  return (
    <>
      <nav className="navbar shadow-md h-[5rem] font-medium flex justify-center space-x-3 py-4 z-30">
          <Link href='/'>
        <div className={`flex items-baseline ${active === 'home' ? 'text-green-500' : ''}`}>
          <AiTwotoneHome className='text-2xl font-semibold mr-[-.5rem]'/>
          <button 
          onClick={() => setActive('home')} 
          className="mx-3 text-lg font-medium my-1"
          >
            Home
          </button>
        </div>
          </Link>

          <Link href={'/portfolio'}>
        <div className={`flex items-baseline ${active === 'portfolio' ? 'text-green-500' : ''}`}>
          <BsFillLayersFill className=" text-2xl font-semibold mr-[-.5rem]" />
          <button 
          className="mx-3 text-lg font-medium my-1"
          onClick={() => setActive('portfolio')}
          >
            Projects
          </button>
        </div>
          </Link>

          <Link href={'/achievements'}>
        <div className={`flex items-baseline ${active === 'achievements' ? 'text-green-500' : ''}`}>
          <button onClick={() => setActive('achievements')} className="mx-3 text-lg font-medium my-1">
            Achievements
          </button>
        </div>
          </Link>

        <div className="navbar-end">
          <label className="swap swap-indeterminate">
            <input type="checkbox" onChange={handleTheme} />
            <LightModeRoundedIcon className="swap-on text-green-400 text-3xl" />
            <DarkModeIcon className="swap-off text-green-400 text-3xl" />
          </label>
         
        </div>


      </nav>
    </>
  );
})
