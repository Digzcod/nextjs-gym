'use client'
import React from 'react'
import TopLaspal from '../components/00--email-designs/TopLaspal'
import Empowered from '../components/00--email-designs/Empowered'
import LashPalAbout from '../components/00--email-designs/LashPalAbout'
import Discover from '../components/00--email-designs/Discover'
import BlinkWink from '../components/00--email-designs/BlinkWink'
import Footer from '../components/00--email-designs/Footer'


export default function EmailLashesPage() {
  return (
    <main className=' w-full sm:min-w-[600px] text-gray-900'>
      <TopLaspal/>
      <Empowered/>
      <LashPalAbout/>
      <Discover/>
      <BlinkWink/>
      <Footer/>
    </main>
  )
}
