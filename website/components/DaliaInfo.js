import { playfair, raleway, roboto } from "@/app/utils/fonts";
import { motion } from "framer-motion";

const DaliaInfo = () => {
    return (
        <>
            <div
                className="relative bg-cover bg-center h-screen flex items-center"
            >
                <img
                    className="absolute inset-0 bg-cover bg-center opacity-10"
                    src="/dalia/dalia-three.webp"
                    alt='pic'
                />
                <div className="relative mx-auto mt-40 z-10 p-4 sm:p-10">

                    <div


                        className={`${raleway.className} flex flex-col sm:flex-row justify-center items-center gap-10 text-base ss:text-xl`}
                    >
                        {/* TITLE */}
                        <motion.p
                            viewport={{ once: true }}
                            initial={{ opacity: 0, x: -70 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5 }}
                            className={`${playfair.className} text-white flex flex-col`}>
                            <span
                                className="font-semibold text-xl md:text-2xl"
                            >Луксозна еднофамилна</span>
                            <span
                                className="font-semibold text-xl md:text-2xl"
                            >къща Далия</span>
                            <span
                                className="mt-2 font-light italic text-base md:text-lg"
                            >Етап - Акт 16</span>

                            <span
                                className="sm:w-80 mt-2 font-extralight text-sm md:text-base"
                            >Едно бижу в полите на Витоша с уникални гледки към София. Луксозен имот с над 700 кв.м. РЗП и двор от 750 кв.м. в престижния кв. Драгалевци.</span>
                        </motion.p>
                        <motion.div
                            viewport={{ once: true }}
                            initial={{ opacity: 0, x: 70 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.5 }}
                            className="relative w-72 h-60 md:w-[500px] md:h-[500px] saturate-150 bg-[url('/dalia/dalia-three.webp')] inset-0 bg-cover bg-center" alt="">
                            <div className="before:border-2 before:border-solid before:border-white before:absolute before:inset-0 before:top-3 before:-left-3 before:border-t-0 before:border-r-0
              before:w-full before:h-full"></div>
                        </motion.div>

                    </div>

                </div>
            </div>
            <div className="relative w-full h-full p-10 sm:p-32">
                {/* DESCRIPTION */}
                <p className={`${roboto.className} text-white font-semibold text-sm md:text-base text-justify flex flex-col justify-center items-center gap-5`}>

                    <span className="text-base md:text-lg">Разпределение  </span>
                    <span><span className="font-extrabold text-yellow-500">Етаж 3 </span> - просторно помещение с 360 градуса панорамна гледка към София и Витоша, състоящо се от дневна, спалня и баня с обща площ от 120 кв.м. ,с две панорамни тераси.</span>
                    <span><span className="font-extrabold text-yellow-500">Етаж 2 </span> - 200 кв.м. с четири самостоятелни спални с бани и гардеробни помещения към всяка, с възможност за кабинет с панорамна гледка към София и две тераси. </span>
                    <span><span className="font-extrabold text-yellow-500">Етаж 1 </span> - просторен хол с преддверие с тоалетна, трапезария с обща площ от 182 кв.м. и излаз на просторна веранда около 70 кв.м. и двор.</span>
                    <span><span className="font-extrabold text-yellow-500">Полуподземен етаж </span> - гаражи за 4 автомобила, фитнес, котел и избено помещение - 187 кв.м. </span>

                    <span>⚒Характеристики: 📍Изключително луксозна алуминиева дограма от най-висок клас ⛽Изградена газова връзка 🌡Подово отопление на всички стаи, с топлоизолация между отделните етажи 🏗Високи тавани 📍Топлоизолация 12 см - Фибран 🧱Тухли - Виенербергер 25 Поротерм 📍Дренажна система около цялата къща с ревизионни отвори 📍Водоплътен бетон и хидроизолация от най-висок клас 📍Ексклузивен завършек на покрива с луксозни керемиди Брамак Тегалит с протектор система с 5 защити - цвят антрацит плюс ламарина черен мат 🔈Звукоизолация с акустични тавани 📍Окачени тавани система Knauf 🏰Луксозна фасада от Гранит, Травертин и Варовик по специален архитектурен и технически проект 💨Изградена сплит система за охлаждане с климатици с извод до всяко помещение 🌧Резервоар за дъждовна вода 📍Септична яма с голям обем 🌳Озеленяване по проект на известен Ландшафтен архитект 🚪Гаражни секционни врати Hormann, висок клас Термо Сейф 65 входна блиндирана врата Hormann 🛠Ограда от бетонен фундамент плюс ламелна ламаринена част - черен мат 🔐Изградена охранителна система с периметрова охрана 💡Осветление по фасада</span>


                </p>
            </div>
        </>
    );
};

export default DaliaInfo;
