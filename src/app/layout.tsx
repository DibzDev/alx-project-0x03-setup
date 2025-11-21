import type { Metadata } from 'next'
import './globals.css'
import Layout from '@/components/layouts/Layout'

export const metadata: Metadata = {
  title: 'Splash App',
  description: 'Your one-stop platform for everything AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}