import Link from "next/link";
import LineGradient from "./LineGradient";
import { motion } from "framer-motion";
import SocialMediaIcons from "./SocialMediaIcons";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Contact = () => {


  return (
    <section id="контакти" className="contact py-40">
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

          <Link href={`tel:+359886879993`} className="font-playfair font-semibold text-4xl">
            <span className="text-green-700 cursor-pointer animate-pulse hover:animate-none">ПОЗВЪНЕТЕ НИ СЕ</span> СЕГА
          </Link>

          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
          <motion.div
            className="flex mt-5 justify-end"
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
            <Link href="#" ><BiLogoInstagramAlt size={40} className="mt-10 transition text-white hover:text-[#F20366]" /></Link>

          </motion.div>
        </div>
      </motion.div>

    </section>
  );
};

export default Contact;