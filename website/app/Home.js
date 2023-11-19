'use client'

import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import DotGroup from "@/components/DotGroup";
import MyProjects from "@/components/MyProjects";
import LineGradient from "@/components/LineGradient";
import Articles from "@/components/Articles";
import Qualifications from "@/components/Qualifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import useMediaQuery from "./hooks/useMediaQuery";
import { useEffect, useState } from "react";


// TODO:
// lighthouse optimal


export default function Home() {
  const [selectedPage, setSelectedPage] = useState("home"); //where are we navigationwise
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 1060px)");



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
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
      {isDesktop && (
        <DotGroup
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      )}

      <div className="mx-auto md:h-full">

        <div
          className="mt-50"
          onViewportEnter={() => setSelectedPage("Начало")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </div>
      </div>



      <LineGradient />


      <div className="w-5/6 mx-auto">
        <div
          className="mt-50"
          amount="all"
          onViewportEnter={() => setSelectedPage("Инвеститор")}
        >
          <Articles />
        </div>
      </div>

      <LineGradient />

      <div className="w-5/6 mx-auto md:h-full ">
        <div
          className="mt-50"
          onViewportEnter={() => setSelectedPage("Проекти")}
        >
          <MyProjects />
        </div>
      </div>
      <LineGradient />

      <div className="w-5/6 mx-auto md:h-full">
        <div
          className="mt-50"
          onViewportEnter={() => setSelectedPage("Контакти")}
        >
          <Contact />
        </div>
      </div>

      <Footer />

    </div>
  );
}

