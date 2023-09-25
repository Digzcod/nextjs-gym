'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import Navbar from './components/00--landingPage/Navbar'
import { useEffect, useState } from 'react'


const fontStyle = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stephen NextJS Projects',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (

    <html lang="en">
      <body className={fontStyle.className} >     
        {children}
      </body>
    </html>
  )
}
