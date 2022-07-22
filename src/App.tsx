import "./App.css";
import Logo from "./assets/logo.svg";
import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

function App() {
  const [isActive, setIsActive] = useState(Boolean);

  useEffect(() => {
    if (window.outerWidth <= 767) {
      setIsActive(false);
      console.log('ola')
    } else if (window.outerWidth > 768 && window.outerWidth <= 1023) {
      setIsActive(false);
      console.log('oi')
    } else if (window.outerWidth > 1024) {
      setIsActive(true);
      console.log('helo')
    }
  });

  return (
    <div className="App">
      <header className="flex justify-between m-4 items-center">
        <img src={Logo} alt="Logo" className="w-12 m-5" />
        <nav className="flex">
          <AiOutlineMenu
            fill="#ffff"
            className={`w-10 h-10 cursor-pointer ${
              isActive ? "disabled" : ""
            }`}
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
    </div>
  );
}

export default App;
