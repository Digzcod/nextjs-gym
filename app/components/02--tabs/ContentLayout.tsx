import { Paper } from '@mui/material'
import React, { ReactNode } from 'react'

interface Props {
    children: ReactNode
}

export default function ContentLayout({children}: Props) {
  return (
    <main className='grid justify-start my-auto pl-[4rem] mx-auto'>
        <Paper elevation={2} className='mt-[9rem] min-h-min min-w-min px-[2rem] py-3'>
        {children}
        </Paper>
    </main>
  )
}
