import "./App.css";
import Logo from "./assets/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <header className="flex justify-between m-4 items-center">
        <img src={Logo} alt="Logo" className="w-12 m-5" />
        <nav className="flex">
          {/* <AiOutlineMenu fill="#ffff" className="w-10 h-10 cursor-pointer" /> */}
          <ul className="flex gap-10 text-gray-200 font-semibold text-lg ">
            <li>
              Sobre
            </li>
            <li>Projetos</li>
            <li>Habilidades e Ferramentas</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
