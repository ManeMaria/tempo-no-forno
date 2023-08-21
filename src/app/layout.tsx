import './globals.css'
import { Metadata } from 'next';

import { Space_Grotesk } from 'next/font/google';
import Head from 'next/head';


export const metadata: Metadata = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  title: 'Tempo no forno | bem-vindo',
  description: 'Descubra Precisão Culinária: Quanto Tempo Sua Receita Deve Ficar no Forno?',
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Tempo no forno | bem-vindo',
    description: 'Descubra Precisão Culinária: Quanto Tempo Sua Receita Deve Ficar no Forno?',
    url: `${process.env.VERCEL_URL}/`,
    siteName: 'Next.js',
    images: [
      {
        url: '/assets/images/print.png',
        width: 800,
        height: 600,
        alt: 'Og Image Alt',
      }
    ],
    locale: 'pt-BR',
    type: 'website',
  },
}

const space_Grotesk = Space_Grotesk({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fddae3d2" />
        <meta name="msapplication-TileColor" content="#fddae3" />
        <meta name="theme-color" content="#2f0b5b" />
      </Head>
      <body className={space_Grotesk.className}>{children}</body>

    </html>
  )
}
