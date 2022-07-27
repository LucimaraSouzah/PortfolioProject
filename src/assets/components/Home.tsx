import "../../App.css";
import MyPhoto from "../myNew.jpeg";
import Button from "./Button";

const Home = () => {
  return (
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
          <Button text="Entre em contato" />
        </div>
      </div>
      <img
        src={MyPhoto}
        alt="Foto da Lucimara"
        className="sm:rounded-full rounded-3xl lg:w-96 md:w-96 sm:w-96 sm:p-10"
      />
    </section>
  );
};

export default Home;
