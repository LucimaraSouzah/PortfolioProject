import Button from "./Button";
import "../../App.css";

const ProjectCard = ({ image, title, description, linkRepo, linkApp }:{image:string; title:string, description:string, linkRepo:string, linkApp:string}) => {
  return (
      <div className="flex items-center justify-center divCard relative z-10 h-4/5">
        <img
          src={`./images/${image}`}
          className="w-80 h-4/5 object-cover rounded-3xl imgProject "
          alt="Imagem de um projeto realizado pela Lucimara"
        />
        <div className=" w-80 h-full m-2 hidden absolute rounded-3xl cursor-pointer items-center justify-center divBackground">
          <div className=" flex-col text-center transition  duration-3000 divDescription hidden ">
            <h1 className="text-2xl h1-Project">{title}</h1>
            <p className="text-md w-60 mt-8 p-Project">{description}</p>
            <div className="flex flex-col">
              <a href={linkRepo}>
                <Button text="Repositório" />
              </a>
              <a href={linkApp}>
                <Button text="Aplicação" />
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProjectCard;
