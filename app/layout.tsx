import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

export const metadata: Metadata = {
  title: 'Enterprise Company - API Platform, Payment Processing & Analytics',
  description: 'Robust, scalable APIs and payment processing solutions with enterprise-grade reliability and developer-friendly tools.',
  keywords: 'API platform, payment processing, analytics dashboard, enterprise solutions',
  authors: [{ name: 'Enterprise Company' }],
  openGraph: {
    title: 'Enterprise Company - API Platform & Payment Solutions',
    description: 'Robust, scalable APIs and payment processing solutions with enterprise-grade reliability.',
    type: 'website',
    url: 'https://your-domain.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Company - API Platform & Payment Solutions',
    description: 'Robust, scalable APIs and payment processing solutions with enterprise-grade reliability.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <CosmicBadge />
      </body>
    </html>
  )
}