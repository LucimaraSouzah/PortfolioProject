import "../../App.css";

const Button = ({ text }) => {
  return (
    <button className="bg-[#fa9272] p-3 rounded-3xl text-black hover:bg-[#ee7955] hover:text-stone-100 mt-5 button-contact">
      {text}
    </button>
  );
};

export default Button;
