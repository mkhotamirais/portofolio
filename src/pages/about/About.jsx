import { Button, H1, Section } from "../../components/Tags";
import { CgFileDocument } from "react-icons/cg";

const About = () => {
  return (
    <Section id="about" className={"bg-slate-100 pb-6"}>
      <H1>About Me</H1>
      <ul className="list-disc list-inside bg-white p-5 rounded-xl mt-3 leading-loose">
        <li>I focused on the realm of web programming to be a MERN Stack Developer.</li>
        <li>Graduated from UIN Jakarta in 2022, majoring in Arabic Language and Literature.</li>
        <li>Iterested in website programming then learned Javascript and ReactJS to accelerate front-end projects.</li>
        <li>Improved some projects by learning NodeJS and MongoDB for server-side and database.</li>
        <li>Created a single page application and manage rest API.</li>
        <li>Accustomed to using computers since in high school especially MS Office.</li>
        <li>Managed data with MS Excel until knew VBA and interested in programming.</li>
        <li>Focused on the realm of web programming to be a MERN Stack Developer.</li>
        <a
          href="https://docs.google.com/document/d/18R2NTNaj5GlKRRw_xSlzLVVWltXp4V6p3-f9dNR8aHY/edit"
          target="blank"
          rel="noopener"
        >
          <Button className={"py-3 px-6 my-3 rounded-lg flex items-center gap-2"}>
            <CgFileDocument className="text-xl inline-block" /> View CV
          </Button>
        </a>
      </ul>
    </Section>
  );
};

export default About;
