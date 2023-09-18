
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stephen Projects | 02-Tabs',
  description: 'Choose your favorite tours',
}






export default function Tabs({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    
        <body>{children}</body>
    )
  }