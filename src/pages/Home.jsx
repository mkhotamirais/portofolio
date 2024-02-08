import About from "./about/About";
import Contact from "./contact/Contact";
import Project from "./project/Project";
import Skill from "./skill/Skill";
import Title from "./title/Title";

const Home = () => {
  return (
    <section>
      <Title />
      <About />
      <Skill />
      <Project />
      <Contact />
    </section>
  );
};

export default Home;
