import { motion } from "framer-motion";
import { imageLoader } from "@/app/utils/imgLoader";
import Image from "next/image";


const InvestorProjectImage = ({ url }) => {


  return (
    <div className="bg-inherit flex flex-col justify-center items-center w-[300px] h-[300px]">

      <Image
        loader={imageLoader}
        src={`${url}`}
        alt='pic'
        width={1298}
        height={828}
      ></Image>
    </div>
  );
};

const Investor = () => {
  return (
    <section id="инвеститор" className="py-32 grid sm:grid-cols-2 items-center justify-center gap-10 p-10">

      {/* HEADINGS */}
      <div
        className="flex flex-col items-center justify-center gap-10"
      >
        <div>

          {/* <Image
            loader={imageLoader}
            src="/investor-logo.webp"
            className="h-32 w-full"
            alt='investor-logo'
            width={1298}
            height={828}
          ></Image> */}
          <img src="/investor-logo.webp" className="h-32 rounded-lg" alt="investor-logo" />

        </div>
        <div className="flex flex-col gap-5 text-justify sm:text-left">
          <p className="font-semibold">
            Creative Studio е строително-инвестиционно холдингово дружество, което финансира, проектира и изгражда луксозни многофамилни и еднофамилни жилищни сгради и ги реализира на пазара.
          </p>
          <p className="">
            Мотото на компанията при изпълнение на инвестиционните проекти гласи - "Creating Excellence" или "Създаване на съвършенство".
          </p>
        </div>
      </div>

      <motion.div
        className="sm:grid sm:grid-cols-2 mx-auto sm:mx-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <InvestorProjectImage url={'/west-end/west-end-one.webp'} />
        <InvestorProjectImage url={'/tilia/tilia-dvor-2.webp'} />

      </motion.div>

    </section>
  );
};

export default Investor;