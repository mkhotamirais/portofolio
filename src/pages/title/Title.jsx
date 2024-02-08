import { FaArrowDown } from "react-icons/fa";
import { Section } from "../../components/Tags";

const Title = () => {
  return (
    <Section
      className={
        "bg-white flex flex-col md:flex-row items-center justify-around gap-6 pb-16 pt-8 bg-gradient-to-b from-blue-50 via-white to-blue-100 rounded-b-xl"
      }
    >
      <figure className="">
        <img
          src="https://github.com/mkhotamirais/mkhotamirais.github.io/blob/main/images/me2-removebg.png?raw=true"
          alt="me"
          className="border-t-4 shadow-lg h-52 md:h-72 rounded-full bg-gradient-to-tr from-red-200 via-green-200 to-blue-200"
        />
      </figure>
      <div className="p-2 text-center md:text-left bg-clip-text bg-gradient-to-tr from-red-600 via-green-600 to-blue-600 text-transparent">
        <div className="text-xl md:text-2xl">I am</div>
        <h1 className={"text-3xl md:text-6xl mb-3 md:mb-5 font-medium"}>M Khotami Rais</h1>
        <h2 className={"text-xl md:text-3xl font-semibold"}>MERN Web Developer</h2>
        <a href="#about" className="mt-6 inline-block">
          <button className="p-3 md:p-4 px-6 md:px-8 bg-blue-500 text-white rounded-xl leading-none flex items-center gap-2 hover:opacity-50 transition-all duration-100">
            About Me <FaArrowDown className="inline-block" />
          </button>
        </a>
      </div>
    </Section>
  );
};

export default Title;
