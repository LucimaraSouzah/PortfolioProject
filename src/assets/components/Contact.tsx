const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center" id="contact">
      <h1 className="text-2xl text-[#fa9274] h1-projectsMy mb-4">Contato</h1>
      <p className="text-gray-200 text-md w-3/5 text-center p-DescriptionContact mb-10">
        Estou disponível para trabalhar em seus projetos e dar vida às suas
        ideias. Estou a um clique de distância.
      </p>
      <div className="flex flex-col justify-center items-center w-full lg:flex-row lg:justify-evenly mb-10">
        <div className="flex gap-5 flex-col mb-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#fa9274] flex items-center justify-center">
              <img
                src="images/location.svg"
                className="w-5 h-5 object-contain"
              />
            </div>
            <a
              href="https://www.google.com.br/maps/place/Conselheiro+Lafaiete,+MG,+36400-000/@-20.6499181,-43.8455792,12z/data=!3m1!4b1!4m5!3m4!1s0xa3dfe8a2b7c767:0xc6792e00ae5e1d48!8m2!3d-20.6610086!4d-43.7866376"
              className="text-gray-200 text-md p-DescriptionContact"
            >
              Conselheiro Lafaiete, Minas Gerais
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#fa9274] flex items-center justify-center">
              <img src="images/telephone.svg" className="w-5 h-5 object-contain" />
            </div>
            <a
              href="tel:+5531995729646"
              className="text-gray-200 text-md p-DescriptionContact"
            >
              (31) 99572-9646
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#fa9274] flex items-center justify-center">
              <img
                src="images/email.svg"
                className="w-5 h-5 object-contain"
              />
            </div>
            <a
              href="mailto:lucimarasouzah@gmail.com"
              className="text-gray-200 text-md p-DescriptionContact"
            >
              lucimarasouzah@gmail.com
            </a>
          </div>
        </div>     
          <form
            className="flex flex-col gap-5 items-center w-80"
            method="POST"
            action="https://formsubmit.co/lucimarasouzah@gmail.com"
          >
            <input
              name="nome"
              type="text"
              placeholder="Nome Completo"
              className="p-2 pl-5 rounded-3xl w-full bg-[#262626] border-[#ffff] border text-[#fff] focus:border-[#fa9274] outline-none inputForm"
              required
            />
            <div className="flex gap-5 w-80 sm:flex-col">
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="p-2 pl-5 rounded-3xl w-80 bg-[#262626] border-[#ffff] border text-[#fff] focus:border-[#fa9274] outline-none inputForm"
                required
              />
              <input
                name="tel"
                type="tel"
                placeholder="Telefone"
                className="p-2 pl-5 rounded-3xl w-80 bg-[#262626] border-[#ffff] border text-[#fff] focus:border-[#fa9274] outline-none inputForm"
                required
              />
            </div>
            <input
              name="mensagem"
              type="textarea"
              placeholder="Digite sua mensagem"
              className="p-2 pl-5 rounded-3xl w-full h-20 bg-[#262626] border-[#ffff] border text-[#fff] focus:border-[#fa9274] outline-none inputForm"
              required
            />
            <input type="hidden" name="_captcha" value="false"/>
            <button
              type="submit"
              className="p-2 rounded-3xl w-40 bg-[#fa9274] text-[#212121] hover:bg-[#ee7955] hover:text-gray-100 inputForm"
              value="enviar"
            >
              Enviar
            </button>
          </form>
        </div>
    
    </section>
  );
};

export default Contact;
