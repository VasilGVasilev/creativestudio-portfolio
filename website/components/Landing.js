import SocialMediaIcons from "./SocialMediaIcons";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { motion } from "framer-motion";
import Link from "next/link";
import { playfair } from "@/app/utils/fonts";
import TechStackIcons from "./TechStackIcons";
import useModal from "@/app/hooks/useModal";
import { imageLoader } from "@/app/utils/imgLoader";
import Image from "next/image";
import { raleway } from "@/app/utils/fonts";

const Landing = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  const openModal = useModal((state) => state.openModal)
  return (

      <motion.section
        initial="hidden" 
        whileInView="visible"
        viewport={{ once: true}}
        transition={{ duration: 0.1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        id="home"
        className="relative"
      >

        <img src="/dalia/dalia-three.webp" className="h-screen w-full object-cover opacity-50" alt="" />
        <div className={`${raleway.className} absolute top-1/2 left-5 w-full h-full`}>
          <span className="font-semibold mb-1">Изберете вашият нов дом</span>
          <h1 className="font-medium mb-2 flex flex-col">
            <span>ОТКРИЙТЕ</span>
            <span>НАЙ-ДОБРОТО ПРЕДЛОЖЕНИЕ</span>
            <span>ЗА ВАС</span>
          </h1>
          <a href="#" className="button">Нашите проекти</a>
        </div>
      </motion.section>

  );
};

export default Landing;

      // {/* IMAGE SECTION */}
      // <motion.div 
      //   className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2"
      //   initial="hidden"
      //   whileInView="visible"
      //   viewport={{ once: true }}
      //   transition={{ duration: 0.7, delay: 0.3 }}
      //   variants={{
      //       hidden: { opacity: 0, scale: 0 },
      //       visible: { opacity: 1, scale: 1 },
      //   }} 
      // >
      //   {isAboveLarge ? (
      //     <div
      //       // before:w-full before:max-w-[400px] md:before:max-w-[600px], biggest width but not more than 400px, 600px
      //       className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
      //       before:w-full before:max-w-[400px] md:before:max-w-[600px] before:bg-neutral-100 before:opacity-20 before:h-full before:border-2 before:border-blue before:z-[-1]"
      //     >
      //       <Image
      //         className="hover:filter hover:saturate-150 transition duration-500 z-10 w-full rounded-t-[400px] max-w-[400px] md:max-w-[600px]"
      //         loader={imageLoader}
      //         src="/assets/profile-image.webp"
      //         alt="profile"
      //         width={1035}
      //         height={977}
      //       ></Image>
      //     </div>
      //   ) : (
      //     <Image
      //       className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full rounded-t-[400px] max-w-[400px] md:max-w-[600px]"
      //       loader={imageLoader}
      //       src="/assets/profile-image.webp"
      //       alt="profile"
      //       width={1035}
      //       height={977}
      //     ></Image>

      //   )}
      // </motion.div>

      // {/* MAIN TEXT */}
      // <div className="z-30 basis-2/5 mt-12 md:mt-32">
      //   {/* HEADINGS */}
      //   <motion.div
      //     initial="hidden"
      //     whileInView="visible"
      //     viewport={{ once: true, amount: 0.5 }}
      //     transition={{ duration: 0.5 }}
      //     variants={{
      //       hidden: { opacity: 0, x: -50 },
      //       visible: { opacity: 1, x: 0 },
      //     }}
      //   >
      //     <p className={`text-6xl ${playfair.className} z-10 text-center md:text-start`} >
      //       {/* {""} gives us space between Vasil and Vasilev (due to Vasilev being within a span) */}
      //       Vasil {""}
      //       {/* before+content to attach the image brush to the text */}
      //       <span
      //         className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
      //         before:absolute before:-left-[15px] before:-top-[10px] before:z-[-1]"
      //       >
      //         Vasilev
      //       </span>
      //     </p>

      //     <p className="mt-20 mb-7 text-center md:text-start">
      //       Hey, my name is Vasil Vasilev and my passion is Web Development. 👋
      //     </p>
      //   </motion.div>

      //   {/* CALL TO ACTIONS */}
      //   <motion.div
      //     className="flex mt-5 justify-center md:justify-start"
      //     initial="hidden"
      //     whileInView="visible"
      //     viewport={{ once: true, amount: 0.5 }}
      //     // slight delay 
      //     transition={{ delay: 0.2, duration: 0.5 }}
      //     variants={{
      //       hidden: { opacity: 0, x: -50 },
      //       visible: { opacity: 1, x: 0 },
      //     }}
      //   >
      //     <div
      //       className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
      //         hover:bg-blue hover:text-white transition duration-300"
      //       // onClick={openModal}

      //     >
      //       About me
      //     </div>
      //     <Link
      //       // padding and bg create the illusion of a border
      //       className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
      //       href="/VasilVasilevCV.pdf"
      //       download="CV-Document"
      //       target="_blank"
      //       rel="noreferrer"
      //     >
      //       <div className={`${playfair.className} bg-deep-blue hover:text-red transition duration-300 w-full h-full flex items-center justify-center px-10`}>
      //         My CV
      //       </div>
      //     </Link>
      //   </motion.div>

      //   <motion.div
      //     className="flex mt-5 justify-center md:justify-start"
      //     initial="hidden"
      //     whileInView="visible"
      //     viewport={{ once: true, amount: 0.5 }}
      //     // slight delay 
      //     transition={{ delay: 0.4, duration: 0.5 }}
      //     variants={{
      //       hidden: { opacity: 0, x: -50 },
      //       visible: { opacity: 1, x: 0 },
      //     }}
      //   >
      //     <SocialMediaIcons />
      //   </motion.div>

      //   <motion.div
      //     className="flex mt-5 justify-center md:justify-start"
      //     initial="hidden"
      //     whileInView="visible"
      //     viewport={{ once: true, amount: 0.5 }}
      //     // slight delay 
      //     transition={{ delay: 0.6, duration: 0.5 }}
      //     variants={{
      //       hidden: { opacity: 0, x: -50 },
      //       visible: { opacity: 1, x: 0 },
      //     }}
      //   >
      //     <TechStackIcons />
      //   </motion.div>

      // </div>