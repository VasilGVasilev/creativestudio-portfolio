'use client'

import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import MyProjects from "@/components/MyProjects";
import Investor from "@/components/Investor";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect } from "react";
import { useNavbarContext } from "./contexts/navbarContext";


// TODO:
// change imgLoader to new domain


export default function Home() {

  const { selectedPage, setSelectedPage, isTopOfPage, setIsTopOfPage } = useNavbarContext();


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black">
      {/* navbar is not in layout because layout cannot pass on props and context is too complex for the current app magnitude */}

      <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

      <div className="mx-auto md:h-full">

        <div
          className="mt-50"
        >
          <Landing />
        </div>
      </div>


      <div className="w-5/6 mx-auto">
        <div
          className="mt-50"
        >
          <Investor />
        </div>
      </div>


      <div className="mx-auto bg-white">
        <div
          className="mt-50"
        >
          <MyProjects />
        </div>
      </div>

      <div className="w-5/6 mx-auto md:h-full">
        <div
          className="mt-50"
        >
          <Contact />
        </div>
      </div>

      <Footer />

    </div>
  );
}

