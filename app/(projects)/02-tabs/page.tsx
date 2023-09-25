'use client'
import React, { useState } from 'react'
import TabsBtn from '@/app/(projects)/02-tabs/TabsBtn'
import Digz from '@/app/components/02--tabs/Digz'
import Kher from '@/app/components/02--tabs/Kher'
import Clint from '@/app/components/02--tabs/Clint'
import TabsContent from './TabsContent'
import Navbar from '@/app/components/00--landingPage/Navbar'

export default function TabsPage() {
 const [tabs, setTabs] = useState<string>("digz")

 const handleTabsName = (tabsName: string) =>{
  setTabs(tabsName)
 }

  return (
    <main className='flex flex-row'>
      <TabsBtn activeTabs={tabs} nameTabs={handleTabsName}/>
      <TabsContent>
        {tabs === 'digz' && <Digz/>}
        {tabs === 'kher' && <Kher/>}
        {tabs === 'clint' && <Clint/>}
      </TabsContent>
    </main>
  )
}
