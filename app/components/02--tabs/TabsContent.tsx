
import React, { ReactNode } from "react";

interface ContentProps {
  children: ReactNode
}

export default function TabsContent({children}: ContentProps) {
  return (
    <main className="h-screen w-screen">
      <h1>TabsContent</h1>
      {children}
    </main>
  );
}
