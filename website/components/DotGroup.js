import Link from "next/link";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  // the ring around the selected menu 
  const selectedStyles = `relative bg-[#facc15] before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-[#facc15] before:left-[-50%] before:top-[-50%]`;
  
  const notSelectedStyles = `bg-dark-grey hover:bg-[#facc15] transition duration-200 hover:scale-110 active:scale-110 `

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7 z-50">
      <Link
        href="#home"
        className={`${selectedPage === "home" ? selectedStyles : notSelectedStyles
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("home")}
      />

      <Link
        href="#projects"
        className={`${selectedPage === "projects" ? selectedStyles : notSelectedStyles
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("projects")}
      />

      <Link
        href="#articles"
        className={`${selectedPage === "articles" ? selectedStyles : notSelectedStyles
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("articles")}
      />

      <Link
        href="#qualifications"
        className={`${selectedPage === "qualifications" ? selectedStyles : notSelectedStyles
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("qualifications")}
      />

      <Link
        href="#contact"
        className={`${selectedPage === "contact" ? selectedStyles : notSelectedStyles
          } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};

export default DotGroup;