
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Stephen Tabs Projects | 02-Tabs',
  description: 'Choose your favorite tours',
}

export default function ToursLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  
      <body>{children}</body>
  )
}
