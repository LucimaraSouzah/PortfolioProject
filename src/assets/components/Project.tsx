import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <section className="flex flex-col items-center justify-center" id="project">
      <h1 className="text-2xl text-[#fa9274] h1-projectsMy mt-10 mb-4">
        Meus projetos 💻💡
      </h1>
      <div className="flex h-4/5 gap-10 mb-10 flex-wrap justify-center items-center">
        <ProjectCard
          image="projetoClima.png"
          title="☔ inWeather"
          description="Layout desenvolvido no AdobeXD. feito em HTML, SASS e JavaScript. Mostra a data, o país da cidade e as informações climáticas do momento."
          linkRepo="https://github.com/LucimaraSouzah/weatherProject"
          linkApp="https://lucimarasouzah.github.io/weatherProject/"
        />
        <ProjectCard
          image="projetoTaskList.png"
          title="📝 Lista de Tarefas"
          description="Site desenvolvido para aperfeiçoar técnica de CRUD (Criação, leitura, atualização e exclusão). Utilizei HTML, CSS e JavaScript."
          linkRepo="https://github.com/LucimaraSouzah/taskList"
          linkApp="https://lucimarasouzah.github.io/taskList/"
        />
        <ProjectCard
          image="projetoSweetCoffeeCream.png"
          title="☕ SweetCoffeeCream"
          description="Site desenvolvido pensando em uma cafeteria, contendo informações dela e priorizando o máximo possível da experiência do usuário com as cores e o layout. Feito com HTML, CSS e JavaScript."
          linkRepo="https://github.com/LucimaraSouzah/SweetCoffeCream"
          linkApp="https://lucimarasouzah.github.io/SweetCoffeCream/"
        />
      </div>
    </section>
  );
};

export default Project;
