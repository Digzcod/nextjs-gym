import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digz | Email Lashes",
  description: "Choose your favorite tours",
};

export default function EmailLashesLayout({children}: {children: React.ReactNode}) {
  return (
    <main className=" bg-slate-200 grid justify-center min-h-screen">
        {children}
    </main>
  )
}
