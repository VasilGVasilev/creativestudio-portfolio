import { playfair } from "@/app/utils/fonts";
import LineGradient from "./LineGradient";
import { motion } from "framer-motion";
import Link from "next/link";
import { imageLoader } from "@/app/utils/imgLoader";
import Image from "next/image";

// the following two are merely templates for the two states /variants/
// staggering one by one pics of projects effect
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const articleVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Article = ({ title, subtitle, url }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-100 transition duration-700
    bg-deep-blue z-30 flex flex-col justify-center items-center text-center p-10 text-white`;
  const articleTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={articleVariant} className="relative" viewport={{ once: true }}>
      <Link href={url} className={overlayStyles}>
        <p className={`${playfair.className} text-3xl`}>{title}</p>
        <p className="mt-7 font-extrabold text-2xl">{subtitle}</p>
      </Link>
      <div className="bg-white flex flex-col justify-center items-center w-[400px] h-[400px] p-10">
        <Image
          loader={imageLoader}
          src={`/assets/${articleTitle}.webp`}
          alt={articleTitle}
          width={1298}
          height={828}
        ></Image>
      </div>
    </motion.div>
  );
};

const Articles = () => {
  return (
    <section id="инвеститор" className="pt-48 pb-48">

      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className={`${playfair.className} font-semibold text-4xl`}>
            <span className="text-red">ART</span>ICLES
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          The following articles represent some brief explanations and solutions to fundamental problems I incurred during the development
          of my projects.
        </p>
      </motion.div>

      {/* ARTICLES */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className={`${playfair.className} flex justify-center text-center items-center p-10 bg-red
            max-w-[400px] max-h-[400px] text-2xl font-semibold`}
          >
            EVERY CONCEPT IS FEASIBLE
          </div>
          <Article title="Article 1" subtitle='Javascript is single or multi-threaded?' url={'https://dev.to/vasilgvasilev/javascript-is-single-or-multi-threaded-486e'} />

          <Article title="Article 2" subtitle='Loose Coupling and Dependency Injection (DI) principle ' url={'https://dev.to/vasilgvasilev/loose-coupling-and-dependency-injection-di-principle-3i8c'} />

          {/* ROW 2 */}
          <Article title="Article 3" subtitle='Copying an Array in Javascript ' url={'https://dev.to/vasilgvasilev/copying-an-array-in-javascript-2dg3'} />
          <Article title="Article 4" subtitle='Mutable And Immutable Values in Javascript' url={'https://dev.to/vasilgvasilev/mutable-and-immutable-values-in-javascript-1eho'} />
          <Article title="Article 5" subtitle='Currying Step-By-Step' url={'https://dev.to/vasilgvasilev/currying-step-by-step-5eb2'} />

          {/* ROW 3 */}
          <Article title="Article 6" subtitle='Why You Should Understand Closures To Master .reduce()' url={'https://dev.to/vasilgvasilev/why-you-need-to-understand-closures-to-fully-master-reduce-7ac'} />
          <Article title="Article 7" subtitle='Understanding the useCallback hook' url={'https://dev.to/vasilgvasilev/understanding-the-usecallback-hook-4d5b'} />
          
          <div
            className={`${playfair.className} flex justify-center text-center items-center p-10 bg-blue
            max-w-[400px] max-h-[400px] text-2xl font-semibold`}
          >
            IF YOU UNDERSTAND WHAT IS UNDER THE HOOD
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Articles;