import React from "react";

interface TabsBtnProps {
  nameTabs: (tabs: string) => void
}

export default function TabsBtn({nameTabs}:TabsBtnProps) {

  return (
    <aside className="w-[20rem] min-h-screen bg-gray-600 h-screen">
      <h1>Tabs Button</h1>
      <div className="grid mt-60">
        <button
          className="border-2 border-green-600 py-[.7rem] bg-blue-100"
          onClick={() => nameTabs('digz')}
        >
          Digz Tabs1 
        </button>

        <button 
        className="border-2 border-green-600 py-[.7rem] bg-blue-100"
        onClick={() => nameTabs('kher')}
         
        >
          Tabs2
        </button>

        <button 
        className="border-2 border-green-600 py-[.7rem] bg-blue-100"
        onClick={() => nameTabs('tommy')}
        >
          Tabs3
        </button>
      </div>
    </aside>
  );
}
