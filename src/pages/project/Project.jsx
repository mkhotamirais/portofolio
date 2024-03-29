import { H1, Section } from "../../components/Tags";

const projectsList = [
  { name: "Eduwork Fe Sisko", imagePath: "images/eduwork-fesisko.jpg", url: "https://eduwork-fesisko.vercel.app/" },
  { name: "Hadinalmusri", imagePath: "images/hadinalmusri.jpg", url: "https://hadinalmusri.com" },
  {
    name: "Nurul Iman",
    imagePath: "images/manuruliman.jpg",
    url: "https://panduan-teknologi.vercel.app/porto/nuruliman/index.html",
  },
  {
    name: "React CRUD basic",
    imagePath: "images/react-crud-basic.png",
    url: "https://react-crud-basic-ota.vercel.app/",
  },
  {
    name: "React CRUD Redux basic",
    imagePath: "images/react-crud-redux-basic.png",
    url: "https://react-crud-redux-basic.vercel.app/",
  },
];

const Project = () => {
  return (
    <Section id="projects">
      <H1>Projects</H1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3 mb-5">
        {projectsList.map((pl) => (
          <a
            key={pl.name}
            href={pl.url}
            target="blank"
            rel="noopener"
            className="bg-white p-2 rounded hover:shadow-xl group transition-all duration-200"
          >
            <figure className="overflow-hidden">
              <img src={pl.imagePath} alt={pl.name} className="group-hover:scale-110 transition-all duration-200" />
            </figure>
            <h3 className="font-semibold text-center leading-loose group-hover:text-blue-500">{pl.name}</h3>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Project;
