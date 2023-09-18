import React from "react";
import styled from "./TabsBtn.module.css";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

interface TabsBtnProps {
  activeTabs: string;
  nameTabs: (tabs: string) => void;
}

export default function TabsBtn({ nameTabs, activeTabs }: TabsBtnProps) {
  return (
    <aside className="w-[20rem] min-h-screen ml-[3rem] h-screen px-1">
  
      <div className=" grid mt-60 transition delay-75 pl-4 ">
        <div className="flex Just min-w-[3rem] items-center">
          <button
            className={`text-lg justify-start w-[rem] py-2 font-semibold text-gray-600 pl-2
            ${activeTabs === "digz" ? styled.activeTab : ""}`}
            onClick={() => nameTabs("digz")}
          >
            Digz
          {activeTabs === "digz" ? <ArrowForwardIosRoundedIcon/>: null}
          </button>
        </div>

        <div className="flex Just min-w-[3rem] items-center">
          <button
            className={`text-lg justify-start w-[rem] py-2 font-semibold  text-gray-600 pl-2
            ${activeTabs === "kher" ? styled.activeTab : ""}`}
            onClick={() => nameTabs("kher")}
          >
            Kher
          {activeTabs === "kher" ? <ArrowForwardIosRoundedIcon/> : null}
          </button>
        </div>

        <div className="flex Just w-[8rem] items-center">
          <button
            className={`text-lg justify-start w-[rem] py-2 font-semibold  text-gray-600 pl-2
            ${activeTabs === "clint" ? styled.activeTab : ""}`}
            onClick={() => nameTabs("clint")}
          >
            Clint
          {activeTabs === "clint" ? <ArrowForwardIosRoundedIcon/> : null}
          </button>
        </div>

      </div>
    </aside>
  );
}
