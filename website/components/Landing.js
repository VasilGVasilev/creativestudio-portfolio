import useMediaQuery from "@/app/hooks/useMediaQuery";
import { motion } from "framer-motion";
import Link from "next/link";
import useModal from "@/app/hooks/useModal";
import { imageLoader } from "@/app/utils/imgLoader";
import Image from "next/image";
import { raleway } from "@/app/utils/fonts";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";


import { useEffect, useState } from "react";




const Landing = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const openModal = useModal((state) => state.openModal);

  //--------------------------------------------------------- CUSTOM CHANGING BG-IMG
  const images = [
    "/tilia/tilia-two.webp",
    "/dalia/dalia-three.webp",
    "/ixora/ixora-one.webp",
    "/west-end/west-end-two.webp"
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
        className="relative"
      >
        <motion.img
          className="relative h-screen w-full object-cover opacity-50 transition-shadow"
          src={`${images[currentImg]}`}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 3 }}
          variants={{
            hidden: { scale: 1.1 },
            visible: { scale: 1 },
          }}
          alt='pic'
        />
      </div>
      <motion.div

        viewport={{ once: true }}
        initial={{ opacity: 0, y: -70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 30, duration: 1.5 }}
        className={`${raleway.className} absolute top-1/3 ml-10 text-base ss:text-xl`}
      >
        <span className="font-semibold">Създаване на съвършенство</span>
        <div className="font-medium flex flex-col text-xl ss:text-4xl">
          <span className="text-shadow-default" >Открийте</span>
          <span className="text-shadow-default" >Meчтания Дом</span>
          <span className="text-shadow-default" >Днес</span>
        </div>
        <Link href="#проекти" className="mt-10 inline-block bg-black text-white px-3 py-4 font-semibold text-base md:text-lg transition hover:bg-black hover:text-white">Нашите проекти</Link>
        <div className="flex flex-row justify-start items-center gap-5">
          <Link href="https://www.instagram.com/creativestudio_realestate/" ><BiLogoInstagramAlt size={50} className="mt-10 transition text-white hover:text-[#F20366]" /></Link>
          <Link href="https://www.facebook.com/profile.php?id=61553703571861" ><FaFacebookSquare size={44} className="mt-10 transition text-white hover:text-blue-700" /></Link>
        </div>

      </motion.div>

    </section>

  );
};

export default Landing;
