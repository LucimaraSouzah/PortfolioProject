const Skills = () => {
  return (
    <section className="flex flex-col items-center justify-center" id="skills">
      <h1 className="text-2xl text-[#fa9274] h1-projectsMy mb-4">
        Habilidades e Ferramentas
      </h1>
      <div className="flex flex-wrap gap-10 items-center justify-center mb-20 sm:gap-5">
        <div className="shadow-[#141414] shadow-lg w-80 h-80 p-10 flex flex-col items-center justify-center rounded-2xl hover:shadow-[#000]">
          <div className="w-20 h-20 rounded-full flex items-center justify-center divBallBlue">
            <img src="/images/development.svg" className="w-10 h-10" />
          </div>
          <h1 className="text-gray-200 text-lg m-5 h1-Skills">
            Tenho experiência
          </h1>
          <div className="flex flex-wrap gap-2 h-20">
            <img
              className="w-10 h-10 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            />
            <img
              className="w-10 h-10 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            />
            <img
              className="w-10 h-10 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            />
            <img
              className="w-10 h-10 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
            />
            <img
              className="w-10 h-10 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
            />
            <img
              className="w-10 h-10 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            />
            <img
              className="w-10 h-10 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            />
            <img
              className="w-10 h-10 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg"
            />
            <img
              className="w-10 h-10 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg"
            />
            <img
              className="w-10 h-10 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            />
          </div>
        </div>
        <div className="shadow-[#141414] shadow-lg w-80 h-80 p-10 flex flex-col items-center rounded-2xl justify-center hover:shadow-[#000]">
          <div className="w-20 h-20 rounded-full flex items-center justify-center divBallPurple">
            <img src="/images/education.svg" className="w-10 h-10" />
          </div>
          <h1 className="text-gray-200 text-xl m-5 h1-Skills">
            Estou estudando
          </h1>
          <div className="flex flex-wrap gap-2 h-20">
            <img
              className="w-10 h-10 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            />
            <img
              className="w-10 h-10 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
            <img
              className="w-10 h-10 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
            />
            <img
              className="w-10 h-10 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
            />
            <img
              className="w-10 h-10 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            />
          </div>
        </div>
        <div className="shadow-[#141414] shadow-lg w-80 h-80 p-10 flex flex-col items-center rounded-2xl justify-center hover:shadow-[#000]">
          <div className="w-20 h-20 rounded-full flex items-center justify-center divBallRed">
            <img src="/images/loved.svg" className="w-10 h-10" />
          </div>
          <h1 className="text-gray-200 text-xl m-5 h1-Skills">
            Tenho interesse
          </h1>
          <div className="flex flex-wrap gap-2 h-20">
            <img
              className="w-10 h-10 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg"
            />
            <img
              className="w-10 h-10 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/less/less-plain-wordmark.svg"
            />
            <img
              className="w-10 h-10 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"
            />
            <img
              className="w-10 h-10 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
            />
            <img
              className="w-10 h-10 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            />
            <img
              className="w-10 h-10 object-contain"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
