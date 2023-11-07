"use client";
import React, { useEffect, useState, useCallback, memo } from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillLayersFill } from "react-icons/bs";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsFillTrophyFill } from "react-icons/bs";
import classnames from "classnames";
import { BiMenu } from "react-icons/bi";
import MobileDrawer from "./MobileDrawer";

interface ThemesProps {
  corporate: string;
  dark: string;
}

const themes: ThemesProps = {
  corporate: "corporate",
  dark: "dracula",
};

function getLocalStorage() {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme") || themes.corporate;
  }
  return themes.corporate;
}

export default memo(function Navbar() {
  const [theme, setTheme] = useState(getLocalStorage());
  const [open, setOpen] = useState(false);
  const currentPath = usePathname();

  const links = [
    {
      name: "home",
      path: "/",
      icon: <AiTwotoneHome className="text-2xl font-semibold" />,
    },
    {
      name: "portfolio",
      path: "/portfolio",
      icon: <BsFillLayersFill className=" text-2xl font-semibold " />,
    },
    {
      name: "achievements",
      path: "/achievements",
      icon: <BsFillTrophyFill className=" text-2xl font-semibold" />,
    },
  ];

  const handleTheme = useCallback(
    function handleTheme() {
      const { corporate, dark } = themes;
      const newTheme = theme === corporate ? dark : corporate;
      setTheme(newTheme);
    },
    [theme]
  );

  const handleOpen = () => {
    setOpen(!open);
  };

  useEffect(
    function () {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    },
    [theme]
  );

  return (
    <nav className="navbar shadow-md h-[5rem] font-medium flex sm:justify-evenly   sm:space-x-3 sm:py-4 z-30 w-auto px-[1.5erm] sm:px-0">
      <BiMenu
        className={classnames({
          "text-[2.7rem] sm:hidden": true,
          "text-bg-zinc-800 font-semibold": theme === themes.corporate,
          "text-bg-zinc-50 font-semibold": theme === themes.dark,
          "@media screen and (max-width: 500px) display  ": true,
        })}
        onClick={handleOpen}
      />

      <ul className="space-x-[1.5rem] capitalize hidden  sm:flex mr-auto ">
        {links.map(({ name, path, icon }) => (
          <Link
            href={path}
            key={name}
            className={classnames({
              "text-green-500": currentPath === path,
              "transition-colors flex items-center space-x-2": true,
              "hover:font-[500]": true,
            })}
          >
            <span>{icon}</span>
            <span className="text-lg">{name}</span>
          </Link>
        ))}
      </ul>

      {open && <MobileDrawer open={open} setOpen={handleOpen} theme={theme} />}

      <div className="ml-auto mr-[1.rem]">
        <label className="swap swap-indeterminate ml-auto">
          <input type="checkbox" onChange={handleTheme} />
          <LightModeRoundedIcon className="swap-on text-green-400 text-3xl" />
          <DarkModeIcon className="swap-off text-green-400 text-3xl" />
        </label>
      </div>
    </nav>
  );
});
