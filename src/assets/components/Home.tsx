import "../../App.css";
import MyPhoto from "../my.jpeg";
import MyPhoto2 from "../my2.jpeg";
import MyPhoto3 from "../my3.png";
import MyPhoto4 from "../my4.jpeg";
import MyPhoto5 from "../my5.jpeg";
import MyPhoto6 from "../my6.jpeg";
import MyPhoto7 from "../my7.jpeg";
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
          <a href="#contact">
            <Button text="Entre em contato" />
          </a>
        </div>
      </div>
      <section className="flex flex-col justify-center rounded-3xl w-96 overflow-hidden sm:my-10 galery sm:rounded-full">
        <div className="flex photos sm:rounded-full">
        <img
          src={MyPhoto}
          alt="Foto da Lucimara"
          className="w-96 object-cover"
        />
        <img
          src={MyPhoto2}
          alt="Foto da Lucimara"
          className="w-96 object-cover"
        />
        <img
          src={MyPhoto3}
          alt="Foto da Lucimara"
          className="w-96 object-cover"
        />
        <img
          src={MyPhoto4}
          alt="Foto da Lucimara"
          className="w-96 object-cover"
        />
         <img
          src={MyPhoto5}
          alt="Foto da Lucimara"
          className="w-96 object-cover"
        />
         <img
          src={MyPhoto6}
          alt="Foto da Lucimara"
          className="w-96 object-cover"
        />
         <img
          src={MyPhoto7}
          alt="Foto da Lucimara"
          className="w-96 object-cover"
        />
        </div>
      </section>
    </section>
  );
};

export default Home;
