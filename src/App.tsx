import "./App.css";
import Logo from "./assets/logo.svg";
import MyPhoto from "./assets/myNew.png";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

function App() {
  const [isActive, setIsActive] = useState(Boolean);

  useEffect(() => {
    if (window.outerWidth <= 767) {
      setIsActive(false);
    } else if (window.outerWidth > 768 && window.outerWidth <= 1023) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  });

  return (
    <div className="App">
      <header className="flex justify-between m-4 items-center">
        <img src={Logo} alt="Logo" className="w-12 m-5" />
        <nav className="flex">
          <AiOutlineMenu
            fill="#ffff"
            className={`w-10 h-10 cursor-pointer ${isActive ? "disabled" : ""}`}
            id="iconMenu"
          />
          <ul
            className={`flex gap-10 text-gray-200 font-semibold text-lg ${
              isActive ? "" : "disabled"
            }`}
            id="listNav"
          >
            <li className={`${isActive ? "" : "disabled"}`}>Sobre</li>
            <li className={`${isActive ? "" : "disabled"}`}>Projetos</li>
            <li className={`${isActive ? "" : "disabled"}`}>
              Habilidades e Ferramentas
            </li>
            <li className={`${isActive ? "" : "disabled"}`}>Contato</li>
          </ul>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center lg:flex-row lg:justify-around md:flex-row md:justify-around">
        <section className="flex">
          <div className="flex flex-col text-gray-200 items-center ">
            <h3 className="text-2xl mb-2">Olá 💗 Eu sou </h3>
            <h1 className="text-[#e0afa0] text-6xl mb-5">Lucimara Souza</h1>
            <p className="text-1xl mb-2 text-[#fa9272]">
              Dev. FullStack na Avanade Brasil 🧡🚀
            </p>
          </div>
        </section>
        <img
          src={MyPhoto}
          alt="Foto da Lucimara"
          className="sm:rounded-full rounded-3xl lg:w-96 md:w-96 sm:w-80 sm:p-10"
        />
      </main>
    </div>
  );
}

export default App;
