import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

const roboto = Roboto({
  weight: [ '300'],
  style: [ 'italic'],
  subsets: ['greek'],
  display: 'auto',
})


export const metadata: Metadata = {
  title: 'Craft Fission',
  description: 'Developed by Craft Fission and Teams',
}

// bg-gradient-to-r from-gray-700 via-gray-900 to-black
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className}`}>
        <div className="max-w-auto   mx-auto px-4  sm:px-6 lg-px-8 text-black">
          <div className=" text-white m-auto p-auto "><Navbar/></div>
        <div>{children}</div>
        </div>
         <div className='bg-gray-800  top-0 left-0 w-full z-50 shadow-violet-900 text-white flex flex-col md:flex-row items-center justify-between p-4 md:px-8 pt-5  mt-0 '><Footer/></div>
        </body>
    </html>
  )
}
