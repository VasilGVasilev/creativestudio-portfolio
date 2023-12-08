import useMediaQuery from "@/app/hooks/useMediaQuery";
import { motion } from "framer-motion";
import Link from "next/link";
import useModal from "@/app/hooks/useModal";
import { imageLoader } from "@/app/utils/imgLoader";
import Image from "next/image";
import { raleway } from "@/app/utils/fonts";
import { BiLogoInstagramAlt } from "react-icons/bi";

import { useEffect, useState } from "react";




const Landing = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const openModal = useModal((state) => state.openModal);

  //--------------------------------------------------------- CUSTOM CHANGING BG-IMG
  const images = [
    "/dalia/dalia-three.webp",
    "/tilia/tilia-two.webp",
    "/ixora/ixora-one.webp"
  ]

  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImg((prevImg) => (prevImg + 1) % images.length)
    }, 5000);

    return () => clearInterval(interval)
  }, [])


  //--------------------------------------------------------- CUSTOM CHANGING BG-IMG

  return (

    <section
      id="начало"
    >
      <div
        className="relative bg-center bg-contain bg-no-repeat"
      >

        <motion.img
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 3 }}
          variants={{
            hidden: { scale: 1.1 },
            visible: { scale: 1 },
          }}
          src={`${images[currentImg]}`}
          className="relative h-screen w-full object-cover opacity-50 transition-shadow"
          alt=""
        />
      </div>

      <motion.div

        viewport={{ once: true }}
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 30, duration: 1.5 }}
        className={`${raleway.className} absolute top-1/4 left-5 w-full h-full text-base ss:text-xl ss:ml-28`}
      >
        <span className="font-semibold">Създаване на съвършенство</span>
        <div className="font-medium flex flex-col text-3xl ss:text-7xl">
          <span className="text-shadow-default" >Открийте</span>
          <span className="text-shadow-default" >Meчтания Дом</span>
          <span className="text-shadow-default" >Днес</span>
        </div>
        <Link href="#проекти" className="mt-10 inline-block bg-sky-dalia text-white px-3 py-4 font-semibold text-xl md:text-lg transition hover:bg-black hover:text-white">Нашите проекти</Link>
        <Link href="https://www.instagram.com/creativestudio_realestate/" ><BiLogoInstagramAlt size={28} className="mt-10 transition text-white hover:text-[#F20366]" /></Link>
      </motion.div>

    </section>

  );
};

export default Landing;
