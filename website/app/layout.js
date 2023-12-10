'use client'
import './globals.css'
import { roboto } from './utils/fonts'
import useModal from "./hooks/useModal";
import { NavbarProvider } from './contexts/navbarContext';


export default function RootLayout({ children }) {
  const closeModal = useModal((state) => state.closeModal)
  const modalStatus = useModal((state) => state.modalStatus)

  return (
    <html className={` bg-black text-white ${roboto.className} overflow-x-hidden`} lang='en'>
      <body className='bg-black overflow-x-hidden'>
        <NavbarProvider>
          {children}
        </NavbarProvider>
      </body>
    </html>
  )
}
