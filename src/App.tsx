import "./App.css";
import Logo from "./assets/logo.svg";
import MyPhoto from "./assets/myNew.png";
import Geek from "./assets/geek.png";
import Curriculo from "./assets/download/curriculo.pdf";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

function App() {
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
    <div className={`App`}>
      <header className="flex justify-between mx-5 items-center" id="home">
        <img src={Logo} alt="Logo" className="w-12 m-5" />
        <nav className="flex items-center">
          <AiOutlineMenu
            fill="#ffff"
            className={`w-10 h-10 cursor-pointer ${
              isActive ? "disabled" : ""
            } ${
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
      <main className="flex flex-col">
        <section className="flex flex-col items-center justify-center lg:flex-row lg:justify-around md:flex-row md:justify-around">
          <div className="flex">
            <div className="flex flex-col text-gray-200 items-center ">
              <h3 className="text-2xl mb-2 h3-introdution">Olá 💗 Eu sou </h3>
              <h1 className="text-[#e0afa0] text-6xl mb-5 h1-name">
                Lucimara Souza
              </h1>
              <a href="https://www.avanade.com/pt-br">
                <p className="text-1xl mb-2 text-[#fa9272] hover:text-[#ee7955] hover:font-bold cursor-pointer p-description">
                  Dev. FullStack na Avanade Brasil 🧡🚀
                </p>
              </a>
              <button className="bg-[#fa9272] p-3 rounded-3xl text-black hover:bg-[#ee7955] hover:text-stone-100 button-contact">
                Entre em contato
              </button>
            </div>
          </div>
          <img
            src={MyPhoto}
            alt="Foto da Lucimara"
            className="sm:rounded-full rounded-3xl lg:w-96 md:w-96 sm:w-96 sm:p-10"
          />
        </section>
        <section className="flex sm:flex-col items-center justify-evenly border-[#fa9274] border-solid border-spacing-10 border-4 p-10 mt-24 sm:p-2 m-20 md:m-14 sm:m-2 sm:border-2" id="about">
          <div className="sm:hidden">
            <img
              src={Geek}
              alt="Imagem sobre meus hobbies"
              className="w-96 sm:w-80"
            />
          </div>
          <div
            className="flex flex-col items-center justify-center w-96 ml-5 sm:mt-0 sm:w-80"
          >
            <h1 className="h1-aboutMy text-2xl text-[#fa9272] mt-5">
              Um pouco sobre mim...
            </h1>
            <p className="text-gray-300 text-lg text-justify">
              Meu nome é Lucimara, tenho 19 anos e sou do interior de Minas
              Gerais. O entusiasmo que tenho diariamente para programar é devido
              aos desafios que encontro e ao universo de conteúdos existentes
              que posso aprender. Pois sempre busco alcançar o melhor resultado
              em cada projeto que coloco minhas mãos e poder tirar o máximo de
              aprendizado dele.{" "}
            </p>
            <a href={Curriculo} download="curriculo">
              <button className="bg-[#fa9272] p-3 rounded-3xl text-black hover:bg-[#ee7955] hover:text-stone-100 mt-10 button-contact">
                Meu currículo
              </button>
            </a>
          </div>
          <div className="my-10 lg:hidden md:hidden">
            <img
              src={Geek}
              alt="Imagem sobre meus hobbies"
              className="w-96 sm:w-80"
            />
          </div>
        </section>
        <section
          className="flex flex-col items-center justify-center"
          id="project"
        >
          <h1 className="text-2xl text-[#fa9274] h1-projectsMy mb-10">
            Meus projetos 💻💡
          </h1>
          <div className="flex items-center justify-center z-10 transition ease-in-out duration-3000  divCard">
            <div className="hover:bg-[#eebcae] hover:transition hover:duration-2000 hover:ease-in-out transition duration-2000 ease-in-out rounded-3xl w-full h-min cursor-pointer flex items-center justify-center divBackground">
              <img
                src="./images/projetoClima.png"
                className="w-80 h-4/5 object-cover z-10 m-2 hover:opacity-0 hover:transition hover:duration-2000 hover:ease-in-out rounded-3xl transition duration-2000 ease-in-out imgProjeto"
                alt="Imagem de um projeto realizado pela Lucimara"
              />
              <div className="flex flex-col opacity-0 absolute text-center transition ease-in-out duration-3000 divDescription">
                <h1 className="text-2xl h1-Project">☀️ inWeather</h1>
                <p className="text-md w-60 mt-8 p-Project">
                  Layout desenvolvido no AdobeXD. feito em HTML, SASS e
                  JavaScript. Mostra a data, o país da cidade e as informações
                  climáticas do momento.
                </p>
                <a href="https://github.com/LucimaraSouzah/weatherProject">
                  <button className="bg-[#fa9272] p-3 rounded-3xl text-black hover:bg-[#ee7955] hover:text-stone-100 mt-10 button-contact">
                    Repositório
                  </button>
                </a>
                <a href="https://lucimarasouzah.github.io/weatherProject/">
                  <button className="bg-[#fa9272] p-3 rounded-3xl text-black hover:bg-[#ee7955] hover:text-stone-100 mt-5 button-contact">
                    Aplicação
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
