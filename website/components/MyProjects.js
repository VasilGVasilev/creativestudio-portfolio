import LineGradient from "./LineGradient";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { motion } from "framer-motion";
import { playfair } from "@/app/utils/fonts";
import Link from "next/link";
import Image from "next/image";
import { imageLoader } from "@/app/utils/imgLoader";



const Project = ({ url, altLink, srcImg, imgW, imgH, projectName, projectDesc }) => {
  return (
    <motion.div
      className='p-10 grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-5'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <img src="/dalia/dalia-one.webp" alt="" />
      <div className="flex flex-col gap-3">
        {/* Title */}
        <div>
          Далия
        </div>

        {/* Desc */}
        <div>
          "Охридско езеро парк" е голям и модерен жилищен комплекс, разположен в идеалния център на гр. София, до парк "Възраждане". Комплексът е разположен на 111.6 хил. кв.м РЗП и се състои от 12 отделни сгради с различна етажност - от 1 до 17 етажа. Най-високата сграда - в северната част на парцела, е на 17 етажа, а другите две са терасовидни с височина от 9 до 13 етажа. Комплексът ще предложи 881 апартамента - половината от които с една спалня, а другите с по две, три и четири. Част от апартаментите са със собствени градини и гаражи. Предвидени са 982 автоместа, ресторант-градина, детски площадки и помещения за магазини.
        </div>

        {/* Done in */}
        <div >
          <div className="">
            <p>Реализация</p>
            <p>2025</p>
          </div>
          <Link href="#проекти" className="mt-10 inline-block bg-sky-dalia text-white px-3 py-4 font-semibold text-xl md:text-lg transition hover:bg-black hover:text-white">Разгледайте тук</Link>
        </div>
      </div>
    </motion.div>
  );
};

const MyProjects = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="проекти" className="pt-10 pb-24 bg-white text-black">
      {/* HEADER AND IMAGE SECTION */}
      <div className="flex flex-col sm:flex-row sm:justify-evenly mt-10">

        {/* HEADER */}
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className={`${playfair.className} font-semibold text-4xl md:text-6xl flex flex-col`}>
            <span>НАШИТЕ</span>
            <span>ПРОЕКТИ</span>
          </p>
          <LineGradient />

        </motion.div>

        {/* IMAGE */}
        <motion.div
          className=""
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-black before:z-[-1]"
            >
              <img src="/crane.jpg" className="z-10 max-w-[600px] max-h-[600px]" alt="crane" />

            </div>
          ) : (
            <></>
          )}
        </motion.div>
      </div>

      {/* PROJECTS */}
      <div className="grid grid-cols-1 justify-center items-center mx-auto gap-5">

        {/* TILIA */}
        <Project
          url="https://tiliabg.com/"
          altLink="tilia-img"
          srcImg="/assets/project-tilia.webp"
          imgW="5000"
          imgH="2813"
          projectName={'Tilia Residence'}
          projectDesc={'A SSG website for a freelance project about sell of apartments developed via Next.js, Tailwind, React and Framer Motion. '}
        />

        {/* IXORA */}
        <Project
          url="https://ixorabg.com/"
          altLink="ixora-img"
          srcImg="/assets/project-ixora.webp"
          imgW="5000"
          imgH="2813"
          projectName={'Ixora Residence'}
          projectDesc={'A SSG website for a freelance project about sell of apartments developed via Next.js, Tailwind, React and Framer Motion. '}
        />

        {/* CHAT */}
        <Project
          url="http://vgvchat.tech/"
          altLink="chat-img"
          srcImg="/assets/project-chat.webp"
          imgW="1804"
          imgH="1087"
          projectName={'VGV Chat'}
          projectDesc={'A Create React App website for real-time messaging developed via SASS, React and Firebase with unit testing via Cypress.'}
        />

        {/* AIRBNB */}
        <Project
          url="https://vgv-rental.vercel.app/"
          altLink="airbnb-img"
          srcImg="/assets/project-airbnb.webp"
          imgW="2522"
          imgH="1237"
          projectName={'Airbnb clone'}
          projectDesc={'A fullstack application developed via Typescript, Next.js, React, Tailwind, Prisma, MongoDB, Zustand, Next-Auth, brypt, axios.'}

        />

      </div>

    </section>
  );
};

export default MyProjects;
