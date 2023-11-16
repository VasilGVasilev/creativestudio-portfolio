import Link from "next/link";
import LineGradient from "./LineGradient";
import { motion } from "framer-motion";
import SocialMediaIcons from "./SocialMediaIcons";

const Contact = () => {


  return (
    <section id="contact" className="contact py-48">
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

          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow cursor-pointer">CONTACT ME</span> TO GET STARTED
          </p>

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
            <SocialMediaIcons />
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
};

export default Contact;