'use client'
import './globals.css'
import { roboto } from './utils/fonts'
import Modal from "@/components/Modal";
import useModal from "./hooks/useModal";


export default function RootLayout({ children }) {
  const closeModal = useModal((state) => state.closeModal)
  const modalStatus = useModal((state) => state.modalStatus)

  return (
    <html className={`h-full bg-black text-white scroll-smooth ${roboto.className} overflow-x-hidden`} lang='en'>
      <body className='overflow-x-hidden'>
        <Modal closeModal={closeModal} modalStatus={modalStatus}>
        </Modal>
        {children}
      </body>
    </html>
  )
}
