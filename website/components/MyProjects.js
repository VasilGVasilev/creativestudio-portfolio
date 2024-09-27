import { motion } from "framer-motion";
import { playfair } from "@/app/utils/fonts";
import Link from "next/link";



const Project = ({ url, srcImg, imgW, imgH, projectName, projectDesc, finishingYear, extraClassName }) => {
  return (
    <motion.div
      className='grid grid-cols-1 lg:grid-cols-3 gap-12'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {/* Image */}
      <div className={`lg:col-span-2 ${extraClassName}`}>
        <img src={srcImg} alt="project-picture" className="saturate-150" />
      </div>

      {/* Description */}
      <div className="lg:col-span-1 flex flex-col gap-3 justify-center items-left text-sm bg-[#ece0cd] p-3 relative z-0 before:-top-10 before:-left-2 before:absolute before:border-b-0 before:border-r-0
              before:w-full before:h-full before:border-2 before:border-black before:z-[-1]">
        {/* Title */}
        <div className="font-semibold text-xl">
          {projectName}
        </div>

        {/* Desc */}
        <div className="text-justify">
          {projectDesc}
        </div>

        {/* Done in */}
        <div >
          <div className="">
            <p className="font-semibold">Реализация</p>
            <p>{finishingYear} г.</p>
          </div>
          {url ?
            <Link href={url} className="mt-5 inline-block bg-black text-white px-3 py-4 font-semibold text-sm md:text-base transition hover:bg-white hover:text-black">Разгледайте тук</Link>
            :
            <div className="mt-10 inline-block bg-black text-white px-3 py-4 font-semibold text-sm md:text-base">Очаквайте скоро</div>
          }
        </div>
      </div>
    </motion.div>
  );
};

const MyProjects = () => {
  return (
    <section id="проекти" className="py-14 px-5 sm:px-20 bg-white text-black">
      {/* HEADER AND IMAGE SECTION */}
      <div className="flex flex-col sm:flex-row sm:justify-evenly my-10 sm:my-20">

        {/* HEADER */}
        <div
          className="mb-5"
        >
          <p className={`${playfair.className} font-semibold text-4xl md:text-6xl flex flex-col`}>
            <span>Нашите</span>
            <span>Проекти</span>
          </p>
        </div>

        {/* IMAGE */}

          <div
            className="hidden lg:block"
          >
            <div className="z-10 max-w-[600px] max-h-[600px]">
              <motion.img
                src='/construction/row-1-column-1.webp'
                alt="construction-img"
                viewport={{ once: true, amount: 0.8 }}
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 100 }}
                transition={{ duration: 1.5, delay: 0.5 }}

              />
              <motion.img
                src='/construction/row-2-column-1.webp'
                alt="construction-img"
                viewport={{ once: true, amount: 0.8 }}
                initial={{ x: -150, opacity: 0 }}
                animate={{ x: 0, opacity: 100 }}
                transition={{ duration: 1.5, delay: 1 }}

              />
              <motion.img
                src='/construction/row-3-column-1.webp'
                alt="construction-img"
                viewport={{ once: true, amount: 0.8 }}
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 100 }}
                transition={{ duration: 1.5, delay: 1.5 }}

              />
            </div>

          </div>

      </div>

      {/* PROJECTS */}
      <div className="grid grid-cols-1 justify-center items-center mx-auto gap-10 sm:gap-20 sm:px-20">

        {/* Tilia */}
        <Project
          url="https://tiliabg.com/"
          srcImg="/tilia/tilia-one.webp"
          imgW="5000"
          imgH="2813"
          projectName={'Тилия Резидънс'}
          projectDesc={'В сърцето на квартал Връбница, в близост до Северен парк, се развива новият жилищен проект "Тилия Резидънс". Тук жителите могат да се насладят на спокойствието на квартала, без да се отказват от лесния достъп до търговски центрове, ресторанти и обществен транспорт. Идеално място за хора, които търсят съчетание от съвременен стил, удобства и близост до градските удоволствия.'}
          finishingYear={'2023 - 2025'}
        />

        {/* Ixora */}
        <Project
          url="https://ixorabg.com/"
          srcImg="/ixora/ixora-one.webp"
          imgW="5000"
          imgH="2813"
          projectName={'Ixora Luxury Residence'}
          projectDesc={'Ixora Luxury Residence е бутикова сграда със спа център и финтес, ситуирана в подножието на Витоша. Изпълнението и всички довършителни работи са заложени в изключително висок - бутиков клас. Вертикалната планировка по специален ландшафтен проект оформя зелен пояс около сградата, който създава усещане за живот в паркова среда.'}
          finishingYear={'2022 - 2024'}
        />



        {/* Dalia */}
        <Project
          url="/dalia/"
          srcImg="/dalia/dalia-one.webp"
          imgW="1804"
          imgH="1087"
          projectName={'Далия'}
          projectDesc={'Едно бижу в полите на Витоша с уникални гледки към София. Луксозен имот с над 700 кв.м. РЗП и двор от 750 кв.м. в престижния кв. Драгалевци. '}
          finishingYear={'2020 - 2022'}
          extraClassName="redLineWithText"
        />

        {/* West End */}
        <Project
          url=""
          srcImg="/west-end/west-end-two.webp"
          imgW="2522"
          imgH="1237"
          projectName={'West End Luxury Houses'}
          projectDesc={'В процес на проектиране е луксозен комплекс от 18 самостоятелни еднофамилни къщи със собствени басейни в непосредствена близост до София - само на 20 минути от центъра. Напълно автономно вилно селище със собствен водоизточник и допълнително соларно захранване.'}
          finishingYear={'2024 - 2026'}
        />

      </div>

    </section>
  );
};

export default MyProjects;
