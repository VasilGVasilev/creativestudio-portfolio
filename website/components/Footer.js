import SocialMediaIcons from "./SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-60 bg-blue pt-10 ">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-white">
            Vasil Vasilev
          </p>
          <p className="font-playfair text-md text-white">
            ©2023 VGV. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;