import { useRef, useState } from "react";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { opensans, raleway } from "@/app/utils/fonts";
import { AiOutlineClose } from 'react-icons/ai';
import { PiSquaresFour } from "react-icons/pi";
import { motion } from "framer-motion"
import Link from "next/link";
import { usePathname } from 'next/navigation'

// TODO: 
// mobile menu comes as an animation with framer motion
// refactor img to Image

const LinkTemplate = ({ page, selectedPage, setSelectedPage, setIsMenuToggled, isMenuToggled }) => {
  const lowerCasePage = page.toLowerCase();
  const exitModalToSelectedPage = (lowerCasePage) => {
    setSelectedPage(lowerCasePage)
    if(setIsMenuToggled){
      setIsMenuToggled(!isMenuToggled)
    }
  }
  return (
    <Link
      className={`${selectedPage === lowerCasePage ? "text-[#facc15]" : ""
        } md:text-xl hover:scale-125 transition duration-300`}
      href={`#${lowerCasePage}`}
      onClick={() => exitModalToSelectedPage(lowerCasePage)}
    >
      {page}
    </Link>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const pathname = usePathname();

  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // homePage or daliaPage 
  const navbarBackground = isTopOfPage && pathname === '/' ? "" : "bg-black shadow-[0_1px_1px_0_#FFFFFF]";
  const logoBackground = isTopOfPage && pathname === '/' ? "bg-black" : "bg-white";
  const logoColor = isTopOfPage && pathname === '/' ? "text-white" : "text-black";
  const navbarTop0 = pathname === '/' ? "top-0" : "";


  const modalRef = useRef(null);

  const closeModal = (e) => {
    e.stopPropagation();
    if (e.target == modalRef.current) {
      setIsMenuToggled(!isMenuToggled)
    }
  }


  return (
    <nav className={`${navbarBackground} ${navbarTop0} fixed z-40 w-full py-6 transition`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <Link href={'#начало'} ><h4 className={`${raleway.className} ${logoBackground} ${logoColor} text-center inline-block rounded-full px-3 py-4 text-2xl md:text-4xl font-bold hover:scale-110 transition `}>Creative Studio</h4></Link>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className={`${opensans.className} flex justify-between gap-10 text-base font-semibold`}>
            <LinkTemplate
              page="Начало"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkTemplate
              page="Инвеститор"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkTemplate
              page="Проекти"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkTemplate
              page="Контакти"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className="rounded-full bg-inherit p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            aria-label="Open mobile menu"
          >
           <PiSquaresFour size={24} />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div
            className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-80"
            onClick={closeModal}
            ref={modalRef}
          >
            <motion.div
              className="fixed right-0 bottom-0 h-full bg-black w-[300px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {/* CLOSE ICON */}
              <div className="flex justify-end p-12">
                <button
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                  aria-label="Close Mobile Menu"
                >
                  <AiOutlineClose size={24} />
                </button>
              </div>

              {/* MENU ITEMS */}
              <div className="flex flex-col gap-10 ml-[33%] text-2xl text-white">
                <LinkTemplate
                  page="Начало"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                  isMenuToggled={isMenuToggled}
                />
                <LinkTemplate
                  page="Инвеститор"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                  isMenuToggled={isMenuToggled}
                />
                <LinkTemplate
                  page="Проекти"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                  isMenuToggled={isMenuToggled}
                />
                <LinkTemplate
                  page="Контакти"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                  isMenuToggled={isMenuToggled}
                />
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;