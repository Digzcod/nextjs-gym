'use client'
import React, { useEffect, useState, useCallback, memo } from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillLayersFill } from "react-icons/bs";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFillTrophyFill } from "react-icons/bs";
import classnames from 'classnames'




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
  
  const currentPath = usePathname()

  const links = [
    {name: 'home', path: '/', icon: <AiTwotoneHome className='text-2xl font-semibold'/>},
    {name: 'portfolio', path: '/portfolio', icon: <BsFillLayersFill className=" text-2xl font-semibold " />},
    {name: 'achievements', path: '/achievements', icon: <BsFillTrophyFill className=" text-2xl font-semibold" />}
  
  ]


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
      <nav className="navbar shadow-md h-[5rem] font-medium flex justify-center items space-x-3 py-4 z-30">
       <ul className="space-x-[1.5rem] capitalize">
        {links.map(({name, path, icon}) => (
          <Link 
          href={path} 
          key={name}
          className={classnames({
            'text-green-500': currentPath === path,
            'transition-colors flex items-center space-x-2': true,
            'hover:font-[500]': true,
          })}
          >
            <span>{icon}</span>
            <span className="text-lg">{name}</span>
          </Link>
        ))}
       </ul>

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
