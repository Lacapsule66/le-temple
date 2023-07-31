"use client"
import Anim from './components/Anim'
import Footer from './components/Footer'
import Header from './components/Header'
import Header2 from './components/Header2'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      
      <body className=" overflow-x-hidden relative bg-[#222223]">
        <Anim />
     
        <Header2 />
      {children}
      <Footer />
      
      </body>
    </html>
  )
}
