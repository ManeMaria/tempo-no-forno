import './globals.css'
import { Space_Grotesk } from 'next/font/google';

const space_Grotesk = Space_Grotesk({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={space_Grotesk.className}>{children}</body>
    </html>
  )
}
