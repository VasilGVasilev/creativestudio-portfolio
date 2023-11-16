import { playfair } from "@/app/utils/fonts";
import LineGradient from "./LineGradient";
import { motion } from "framer-motion";

// TODO:
// - add clickable pdfs to master thesis and certificates

const Qualifications = () => {
  return (
    <section id="qualifications" className="pt-32 pb-16">

      {/* HEADING */}

      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className={`${playfair.className} font-semibold text-4xl mb-5 text-red`}>
          QUALIFICATIONS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Prior to web development, I have studied English law and German law culminating in my First Class Master of Laws degree.
        </p>
      </motion.div>

      {/*  QUALIFICATIONS */}
      <div className="md:flex md:justify-between gap-8">

      <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-kings "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className={`${playfair.className} text-6xl`}>“</p>
          <p className="text-center text-xl">
            English Law & German Law
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-humboldt"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className={`${playfair.className} text-6xl`}>“</p>
          <p className="text-center text-xl">
            Master of Laws (LL.M.)
          </p>
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-softuni"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className={`${playfair.className} text-6xl`}>“</p>
          <p className="text-center text-xl">
            JS Web Developer
          </p>
        </motion.div>




      </div>
    </section>
  );
};

export default Qualifications;