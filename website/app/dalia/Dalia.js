'use client'

import Navbar from "@/components/Navbar";
import { useNavbarContext } from "../contexts/navbarContext";
import Footer from "@/components/Footer";
import { playfair } from "../utils/fonts";
import DaliaInfo from "@/components/DaliaInfo";

export const revalidate = 0; // revalidate this page every 60 seconds

export default function Dalia() {
  const { selectedPage, setSelectedPage, isTopOfPage } = useNavbarContext();

  return (
    <div className="bg-black flex flex-col">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <DaliaInfo></DaliaInfo>
      <Footer></Footer>

    </div>
  )
}

