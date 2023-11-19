import Link from "next/link";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  // the ring around the selected menu 
  const selectedStyles = `relative bg-[#facc15] before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-[#facc15] before:left-[-50%] before:top-[-50%]`;
  
  const notSelectedStyles = `bg-dark-grey hover:bg-[#facc15] transition duration-200 hover:scale-110 active:scale-110 `

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7 z-50">
      <Link
        href="#начало"
        className={`${selectedPage === "начало" ? selectedStyles : notSelectedStyles
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("начало")}
      />

      <Link
        href="#инвеститор"
        className={`${selectedPage === "инвеститор" ? selectedStyles : notSelectedStyles
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("инвеститор")}
      />

      <Link
        href="#проекти"
        className={`${selectedPage === "проекти" ? selectedStyles : notSelectedStyles
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("проекти")}
      />

      <Link
        href="#контакти"
        className={`${selectedPage === "контакти" ? selectedStyles : notSelectedStyles
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("контакти")}
      />
    </div>
  );
};

export default DotGroup;