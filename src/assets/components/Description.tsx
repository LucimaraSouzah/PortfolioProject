import "../../App.css";
import Geek from "../geek.png";
import Curriculo from "../download/curriculo.pdf";
import Button from "../components/Button";

const Description = () => {
  return (
    <section
      className="flex sm:flex-col items-center justify-evenly border-[#fa9274] border-solid border-spacing-10 border-4 p-10 mt-24 sm:p-0 lg:mb-2 m-20 md:m-14 sm:m-4 sm:border-2"
      id="about"
    >
      <div className="sm:hidden">
        <img
          src={Geek}
          alt="Imagem sobre meus hobbies"
          className="w-96 sm:w-80"
        />
      </div>
      <div className="flex flex-col items-center justify-center w-96 ml-5 sm:m-0 sm:w-80">
        <h1 className="h1-aboutMy text-2xl text-[#fa9272] mt-5">
          Um pouco sobre mim...
        </h1>
        <p className="text-gray-300 text-lg text-justify">
          Meu nome é Lucimara, tenho 19 anos e sou do interior de Minas Gerais.
          O entusiasmo que tenho diariamente para programar é devido aos
          desafios que encontro e ao universo de conteúdos existentes que posso
          aprender. Pois sempre busco alcançar o melhor resultado em cada
          projeto que coloco minhas mãos e poder tirar o máximo de aprendizado
          dele.{" "}
        </p>
        <a href={Curriculo} download="curriculo">
          <Button text="Currículo" />
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
  );
};

export default Description;
