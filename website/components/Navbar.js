import { useRef, useState } from "react";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { opensans, playfair, raleway } from "@/app/utils/fonts";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { AiOutlineClose } from 'react-icons/ai';
import { PiSquaresFour } from "react-icons/pi";
import { motion } from "framer-motion"

// props: 
// - name of link, must be constant
// - selected or to be selected animation
// - change state in parent of Navbar component -> Home component

// TODO: 
// mobile menu comes as an animation with framer motion
// may be reverse link to anchor link if not smooth
// refactor img to Image
const LinkTemplate = ({ page, selectedPage, setSelectedPage, setIsMenuToggled, isMenuToggled }) => {
  const lowerCasePage = page.toLowerCase();
  const exitModalToSelectedPage = (lowerCasePage) => {
    if(setIsMenuToggled){
      setIsMenuToggled(!isMenuToggled)
    }
    setSelectedPage(lowerCasePage)
  }
  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-[#facc15]" : ""
        }  hover:scale-125 transition duration-300`}
      href={`#${lowerCasePage}`}
      onClick={() => exitModalToSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-black";
  const modalRef = useRef(null);

  const closeModal = (e) => {
    e.stopPropagation();
    if (e.target == modalRef.current) {
      setIsMenuToggled(!isMenuToggled)
    }
  }


  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <AnchorLink href={'#home'} ><h4 className={`${raleway.className} text-xl md:text-3xl font-bold`}>Creative Studio</h4></AnchorLink>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className={`${opensans.className} flex justify-between gap-16 text-base font-semibold`}>
            <LinkTemplate
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkTemplate
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkTemplate
              page="Articles"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkTemplate
              page="Qualifications"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <LinkTemplate
              page="Contact"
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
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                  isMenuToggled={isMenuToggled}
                />
                <LinkTemplate
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                  isMenuToggled={isMenuToggled}
                />
                <LinkTemplate
                  page="Articles"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                  isMenuToggled={isMenuToggled}
                />
                <LinkTemplate
                  page="Qualifications"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  setIsMenuToggled={setIsMenuToggled}
                  isMenuToggled={isMenuToggled}
                />
                <LinkTemplate
                  page="Contact"
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