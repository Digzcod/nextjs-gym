import React from 'react'

export default function TabsBtn() {
  return (
    <section className='w-[20rem] min-h-screen bg-gray-600'>
    <h1>Tabs Button</h1> 
    <div className='grid mt-60'>
        <button className='border-2 border-green-600 py-[.7rem] bg-blue-100'>Tabs1</button>
        <button className='border-2 border-green-600 py-[.7rem] bg-blue-100'>Tabs2</button>
        <button className='border-2 border-green-600 py-[.7rem] bg-blue-100'>Tabs3</button>
    </div>   
    </section>
  )
}
