'use client'

import React, { useState } from 'react'
import TabsBtn from '@/app/components/02--tabs/TabsBtn'
import TabsContent from '@/app/components/02--tabs/TabsContent'
import Digz from '@/app/components/02--tabs/Digz'
import Kher from '@/app/components/02--tabs/Kher'
import Tommy from '@/app/components/02--tabs/Tommy'




export default function TabsPage() {

 const [tabs, setTabs] = useState<string>("")

 const handleTabsName = (tabsName: string) => {

  setTabs(tabsName)
 }

  return (
    <div className='flex'>
      {/* TabsPage */}
      <TabsBtn nameTabs={handleTabsName}/>
      <TabsContent>
        {tabs === 'digz' && <Digz/>}
        {tabs === 'kher' && <Kher/>}
        {tabs === 'tommy' && <Tommy/>}
      </TabsContent>
    </div>
  )
}
