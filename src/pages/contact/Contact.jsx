import { FaLinkedin, FaEnvelope, FaWhatsappSquare } from "react-icons/fa";
import { H1, Section } from "../../components/Tags";

const Contact = () => {
  return (
    <Section className={"min-h-min py-3"} id="contact">
      <H1>Contact Me</H1>
      <div className="text-base md:text-lg grid grid-rows-3 sm:grid-cols-3 gap-3 py-3">
        <a href="https://api.whatsapp.com/send/?phone=6287766606133" className="flex flex-col items-center gap-2">
          <FaWhatsappSquare className="text-[#1b8755] text-4xl inline-block" />
          <span>087766606133</span>
        </a>
        <a href="mailto.mkhotamirais@gmail.com" className="flex items-center flex-col gap-2">
          <FaEnvelope className="text-red-500 text-4xl inline-block" />
          <span>mkhotamirais@gmail.com</span>
        </a>
        <a href="https://www.linkedin.com/in/tami-ota-03b5762b3/" className="flex flex-col items-center gap-2">
          <FaLinkedin className="text-[#0077b5] text-4xl inline-block" />
          <span>LinkedIn</span>
        </a>
      </div>
    </Section>
  );
};

export default Contact;
