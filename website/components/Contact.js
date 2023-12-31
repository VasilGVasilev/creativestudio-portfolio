import Link from "next/link";
import LineGradient from "./LineGradient";
import { motion } from "framer-motion";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebookSquare } from "react-icons/fa";

const Contact = () => {


  return (
    <section id="контакти" className="contact py-44">
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>

          <span className="font-playfair font-semibold text-4xl"><span className="text-green-600">ПОТЪРСЕТЕ НИ</span> СЕГА</span>

          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>

          <motion.div
            className="flex flex-col mt-5 justify-end gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            // slight delay 
            transition={{ delay: 0.4, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Link href={`mailto:office@creativestudiobg.com`} className="flex flex-row justify-end"><span className="hover:text-orange-400">office@creativestudiobg.com</span></Link>
            <Link href={`tel:+359886879993`} className="flex flex-row justify-end "><span className="hover:text-green-600">+359886879993</span></Link>
            <div className="flex flex-row justify-end items-center gap-3">
              <Link href="https://www.instagram.com/creativestudio_realestate/" ><BiLogoInstagramAlt size={50} className="transition text-white hover:text-[#F20366]" /></Link>
              <Link href="https://www.facebook.com/profile.php?id=61553703571861" ><FaFacebookSquare size={44} className="transition text-white hover:text-blue-700" /></Link>
            </div>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
};

export default Contact;