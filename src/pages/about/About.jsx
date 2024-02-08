import { Button, H1, Section } from "../../components/Tags";
import { CgFileDocument } from "react-icons/cg";

const About = () => {
  return (
    <Section id="about" className={"bg-slate-100 pb-6"}>
      <H1>About Me</H1>
      <div className="bg-white p-5 rounded-xl mt-3 leading-loose">
        &#11166; I graduated from Syarif Hidayatullah Islamic State University in 2022, majoring in Arabic Language and
        Literature.
        <br />
        &#11166; I have been interested in website programming, so I learned Javascript, to build website pages.
        <br />
        &#11166; I learned React Js to accelerate my front-end projects.
        <br />
        &#11166; I improved my projects by learning Node Js and MongoDB for server-side and database.
        <br />
        &#11166; I could building the single page application, managing rest API.
        <br />
        &#11166; When I was in high school, as a leader of the student council, I used to use the computer to organize
        documents. At that time, I learned many things about computers, especially MS Office.
        <br />
        &#11166; When I was at college, I took my free time to make a cashier application with MS Excel. Since then, I have
        known VBA and interested in programming.
        <br />
        &#11166; I focused on the realm of web programming to be a MERN Stack Developer.
        <br />
        <a
          href="https://docs.google.com/document/d/18R2NTNaj5GlKRRw_xSlzLVVWltXp4V6p3-f9dNR8aHY/edit"
          target="blank"
          rel="noopener"
        >
          <Button className={"py-3 px-6 my-3 rounded-lg flex items-center gap-2"}>
            <CgFileDocument className="text-xl inline-block" /> View CV
          </Button>
        </a>
      </div>
    </Section>
  );
};

export default About;