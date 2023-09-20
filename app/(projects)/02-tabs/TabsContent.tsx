import React, { ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
}

export default function TabsContent({ children }: ContentProps) {
  return (
    <main className="h-screen w-screen py-auto">
      <div className="grid justify-start mt-[2rem] ml-[5rem]">
        <p className="font-medium text-2xl text-center text-gray-500 border-b-2 border-success">
          Tabs Component
        </p>
      </div>
      {children}
    </main>
  );
}
