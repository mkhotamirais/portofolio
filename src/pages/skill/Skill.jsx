import { H1, Section } from "../../components/Tags";
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiGit,
  SiGithub,
  SiVite,
} from "react-icons/si";

const skills = [
  {
    title: "MongoDB",
    category: "database",
    hex: "#00f767",
    url: "https://www.mongodb.com/",
    icon: <SiMongodb className={`text-[#00f767]`} />,
  },
  {
    title: "Express",
    category: "back-end",
    hex: "#aaaaaa",
    url: "https://expressjs.com/",
    icon: <SiExpress className={`text-[#aaaaaa]`} />,
  },
  {
    title: "React",
    category: "front-end",
    hex: "#00bcd4",
    url: "https://react.dev/",
    icon: <SiReact className={`text-[#00bcd4]`} />,
  },
  {
    title: "Node.js",
    category: "back-end",
    hex: "#8bc34a",
    url: "https://nodejs.org/en",
    icon: <SiNodedotjs className={`text-[#8bc34a]`} />,
  },
  {
    title: "HTML",
    category: "basic",
    hex: "#e44d26",
    url: "https://www.w3schools.com/html/default.asp",
    icon: <SiHtml5 className={`text-[#e44d26]`} />,
  },
  {
    title: "CSS",
    category: "basic",
    hex: "#42a5f5",
    url: "https://www.w3schools.com/css/default.asp",
    icon: <SiCss3 className={`text-[#42a5f5]`} />,
  },
  {
    title: "Javascript",
    category: "basic",
    hex: "#ffca28",
    url: "https://www.w3schools.com/js/default.asp",
    icon: <SiJavascript className={`text-[#ffca28]`} />,
  },
  {
    title: "tailwindcss",
    category: "css framework",
    hex: "#38bdf8",
    url: "https://tailwindcss.com/",
    icon: <SiTailwindcss className={`text-[#38bdf8]`} />,
  },
  {
    title: "Bootstrap",
    category: "css framework",
    hex: "#8212fa",
    url: "https://getbootstrap.com/",
    icon: <SiBootstrap className={`text-[#8212fa]`} />,
  },
  {
    title: "MySQL",
    category: "DBMS",
    hex: "#015b85",
    url: "https://www.mysql.com",
    icon: <SiMysql className={`text-[#015b85]`} />,
  },
  {
    title: "git",
    category: "cms",
    hex: "#f44d27",
    url: "https://git-scm.com/",
    icon: <SiGit className={`text-[#f44d27]`} />,
  },
  {
    title: "GitHub",
    category: "cms",
    hex: "#aaaaaa",
    url: "https://github.com/",
    icon: <SiGithub className={`text-[#aaaaaa]`} />,
  },
  {
    title: "Vite",
    category: "build tool",
    hex: "#fdcc24",
    url: "https://vitejs.dev/",
    icon: <SiVite className={`text-[#fdcc24]`} />,
  },
];

const Skill = () => {
  return (
    <Section id="skills" className={"overlay min-h-min pt-3 pb-6 "}>
      <H1 className={"text-white"}>Skills</H1>
      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-7 gap-3">
        {skills.map((skill) => (
          <a
            href={skill.url}
            target="blank"
            rel="noopener"
            key={skill.title}
            className="bg-[rgba(0,0,0,.5)] rounded-lg p-3 flex flex-col gap-2 items-center hover:scale-110 transition-all duration-100"
          >
            <div className="text-3xl">{skill.icon}</div>
            <h3 className="text-white">{skill.title}</h3>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Skill;
