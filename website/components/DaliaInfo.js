import { playfair, raleway, roboto } from "@/app/utils/fonts";
import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";

const images = [
    {
        original: "/dalia/dalia-1.webp",
        thumbnail: "/dalia/dalia-1.webp",
    },
    {
        original: "/dalia/dalia-2.webp",
        thumbnail: "/dalia/dalia-2.webp",
    },
    {
        original: "/dalia/dalia-3.webp",
        thumbnail: "/dalia/dalia-3.webp",
    },
    {
        original: "/dalia/dalia-one.webp",
        thumbnail: "/dalia/dalia-one.webp",
    },
    {
        original: "/dalia/dalia-two.webp",
        thumbnail: "/dalia/dalia-two.webp",
    },
    {
        original: "/dalia/dalia-three.webp",
        thumbnail: "/dalia/dalia-three.webp",
    },
];


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
            <div className="relative w-full h-full p-10 sm:px-40 lg:px-64">
                {/* DESCRIPTION */}
                <p className="mb-10 text-3xl sm:text-5xl">Разпределение </p>
                <p className={`${roboto.className} text-white font-semibold text-sm md:text-base text-justify flex flex-col justify-center items-start gap-5 `}>

                    <span><span className="font-extrabold text-yellow-500">Етаж 3 </span> - просторно помещение с 360 градуса панорамна гледка към София и Витоша, състоящо се от дневна, спалня и баня с обща площ от 120 кв.м. ,с две панорамни тераси.</span>
                    <span><span className="font-extrabold text-yellow-500">Етаж 2 </span> - 200 кв.м. с четири самостоятелни спални с бани и гардеробни помещения към всяка, с възможност за кабинет с панорамна гледка към София и две тераси. </span>
                    <span><span className="font-extrabold text-yellow-500">Етаж 1 </span> - просторен хол с преддверие с тоалетна, трапезария с обща площ от 182 кв.м. и излаз на просторна веранда около 70 кв.м. и двор.</span>
                    <span><span className="font-extrabold text-yellow-500">Полуподземен етаж </span> - гаражи за 4 автомобила, фитнес, котел и избено помещение - 187 кв.м. </span>

                </p>
                <p className="my-10 text-3xl sm:text-5xl">Характеристики </p>
                <p className={`${roboto.className} text-white font-semibold text-sm md:text-base grid grid-cols-1 md:grid-cols-2 gap-10 text-justify `}>
                    <span><span className="font-extrabold text-yellow-500">Покрив</span> - Ексклузивен завършек на покрива с луксозни керемиди Брамак Тегалит с протектор система с 5 защити - цвят антрацит плюс ламарина черен мат</span>
                    <span><span className="font-extrabold text-yellow-500">Покрив</span> - Луксозна фасада от Гранит, Травертин и Варовик по специален архитектурен и технически проект</span>
                    <span><span className="font-extrabold text-yellow-500">Фасада</span> - Гаражни секционни врати Hormann, висок клас Термо Сейф 65 входна блиндирана врата Hormann </span>
                    <span><span className="font-extrabold text-yellow-500">Охлаждане</span> - Изградена сплит система за охлаждане с климатици с извод до всяко помещение </span>
                    <span><span className="font-extrabold text-yellow-500">Отопление</span> - Подово отопление на всички стаи, с топлоизолация между отделните етажи, 12 см - Фибран</span>
                    <span><span className="font-extrabold text-yellow-500">Ограда</span> - Ограда от бетонен фундамент плюс ламелна ламаринена част - черен мат</span>
                    <span><span className="font-extrabold text-yellow-500">Дограма</span> - Изключително луксозна алуминиева дограма от най-висок клас</span>
                    <span><span className="font-extrabold text-yellow-500">Дренаж</span> - Дренажна система около цялата къща с ревизионни отвори</span>
                    <span><span className="font-extrabold text-yellow-500">Озеленяване</span> - Озеленяване по проект на известен Ландшафтен архитект</span>
                    <span><span className="font-extrabold text-yellow-500">Хидроизолация</span> - Водоплътен бетон и хидроизолация от най-висок клас</span>
                    <span><span className="font-extrabold text-yellow-500">Сигурност</span> - Изградена охранителна система с периметрова охрана</span>
                    <span><span className="font-extrabold text-yellow-500">Тухли</span> - Тухли - Виенербергер 25 Поротерм</span>
                    <span><span className="font-extrabold text-yellow-500">Звукоизолация</span> - Звукоизолация с акустични тавани</span>
                    <span><span className="font-extrabold text-yellow-500">Тавани</span> - Окачени тавани система Knauf</span>
                    <span><span className="font-extrabold text-yellow-500">Резервоар</span> - Резервоар за дъждовна вода</span>
                    <span><span className="font-extrabold text-yellow-500">Септична яма</span> - Септична яма с голям обем </span>
                    <span><span className="font-extrabold text-yellow-500">Газ</span> - Изградена газова връзка</span>
                    <span><span className="font-extrabold text-yellow-500">Осветление</span> - Осветление по фасада</span>
                </p>

            </div>
            <div className="w-full h-full p-10">
                <ImageGallery items={images} />

            </div>
        </>
    );
};

export default DaliaInfo;
