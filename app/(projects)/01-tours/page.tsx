'use client'
import ToursApp from '@/app/components/01--tours/App'


export default function ToursHomePage() {
  return (
    <main className='mx-16'>
      <div className='my-[2rem]'>
      <h2 className='text-center text-green-500 text-2xl font-medium'>
        Tours Page
      </h2>
      </div>
      <ToursApp/>
    </main>
  )
}