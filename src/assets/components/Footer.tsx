import Logo from "../logo.svg";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="flex justify-evenly items-center bg-[#212121] sm:flex-col sm:gap-5 pb-2">
      <img src={Logo} alt="Logo" className="w-12 mt-5" />
      <p className="text-gray-200">© Copyright 2022. All right reserved</p>
      <div className="flex gap-2">
        <a href="https://www.instagram.com/lucimarasouza8/">
          <AiOutlineInstagram className="w-8 h-8  object-fill fill-white rounded-full cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/lucimara-souzah/">
          <AiFillLinkedin className="w-8 h-8  object-fill fill-white rounded-full cursor-pointer" />
        </a>
        <a href="https://github.com/LucimaraSouzah">
          <AiFillGithub className="w-8 h-8  object-fill fill-white rounded-full cursor-pointer" />
        </a>
        <a href="https://twitter.com/Luuh_Souzah8">
          <AiOutlineTwitter className="w-8 h-8 object-fill fill-white rounded-full cursor-pointer" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
