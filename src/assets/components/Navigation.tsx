import "../../App.css";
import Logo from "../logo.svg";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Navigation = () => {
  const [isActive, setIsActive] = useState(Boolean);
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    if (window.outerWidth <= 767) {
      setIsActive(false);
    } else if (window.outerWidth > 768 && window.outerWidth <= 1023) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  });

  function openNavigation() {
    setOpenNav(true);
    setIsActive(true);
    if (openNav === true) {
      setOpenNav(false);
      setIsActive(false);
    }
  }

  return (
    <header className="flex justify-between mx-5 items-center" id="home">
      <img src={Logo} alt="Logo" className="w-12 m-5" />
      <nav className="flex items-center">
        <AiOutlineMenu
          fill="#ffff"
          className={`w-10 h-10 cursor-pointer ${isActive ? "disabled" : ""} ${
            openNav ? "openNav" : ""
          } absolute lg:hidden right-0 top-0 m-5 z-10`}
          id="iconMenu"
          onClick={openNavigation}
        />
        <ul
          className={`flex gap-10 text-gray-200 font-semibold text-lg md:hidden sm:hidden ${
            isActive ? "" : "disabled"
          } ${openNav ? "openNavUl" : ""}`}
          id="listNav"
        >
          <a href="#home">
            {" "}
            <li
              className={`${isActive ? "" : "disabled"} ${
                openNav ? "openNavLi" : ""
              } `}
            >
              Home
            </li>
          </a>
          <a href="#about">
            {" "}
            <li
              className={`${isActive ? "" : "disabled"} ${
                openNav ? "openNavLi" : ""
              } `}
            >
              Sobre
            </li>
          </a>
          <a href="#project">
            <li
              className={`${isActive ? "" : "disabled"} ${
                openNav ? "openNavLi" : ""
              }`}
            >
              Projetos
            </li>
          </a>
          <a href="#">
            <li
              className={`${isActive ? "" : "disabled"} ${
                openNav ? "openNavLi" : ""
              }`}
            >
              Habilidades e Ferramentas
            </li>
          </a>
          <a href="#">
            <li
              className={`${isActive ? "" : "disabled"} ${
                openNav ? "openNavLi" : ""
              }`}
            >
              Contato
            </li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
