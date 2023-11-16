import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BiLogoGmail, BiSolidPhone } from 'react-icons/bi';



const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <Link
          className="hover:opacity-50 transition duration-300"
          href="https://github.com/VasilGVasilev"
          // open new tab
          target="_blank"
          // no bugs with older browsers
          rel="noreferrer"
          aria-label="Github Link"
        >
          <AiFillGithub size={30} />
        </Link>
        <Link
          className="hover:opacity-50 transition duration-300"
          href="https://uk.linkedin.com/in/vasil-vasilev-28621b178"
          target="_blank"
          rel="noreferrer"
          aria-label="Linkedin Link"

        >
          <AiFillLinkedin size={30} />

        </Link>
        <Link
          className="hover:opacity-50 transition duration-300"
          href="mailto:vgvmail97@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Gmail Link"
        >
          <BiLogoGmail size={30} />

        </Link>
        <Link
          className="hover:opacity-50 transition duration-300"
          href="tel:+359884336793"
          target="_blank"
          rel="noreferrer"
          aria-label="Phone Link"
        >
          <BiSolidPhone size={30} />

        </Link>

      </div>
    );
  };
  
  export default SocialMediaIcons;