import { Container } from "react-bootstrap";
import betlyze from "../../Assets/Projects/betlyze.jpg";
import caleb from "../../Assets/Projects/caleb.jpg";
import cradle from "../../Assets/Projects/cradle.png";
import gerolab from "../../Assets/Projects/gerolab.png";
import likitaai from "../../Assets/Projects/likitaai.png";
import tech from "../../Assets/Projects/tech.jpg";
import ProjectCard from "./ProjectCards.jsx";

const projects = [
  {
    image: betlyze,
    title: "Betlyze",
    description:
      "Betlyze: An AI-powered football prediction and bet code conversion platform that offers match predictions and allows users to seamlessly convert booking codes between different bookies, built using React and Tailwind, and integrated with football and odds APIs.",
    github: "https://github.com/Raph3rr/Betlyze",
    demo: "https://betlyze-seven.vercel.app/",
  },
  {
    image: likitaai,
    title: "LikitaAi",
    description:
      "LikitaAI is an AI-powered symptom checker designed to help users understand possible medical conditions based on symptoms they provide. It also offers general treatment advice and supports both English and Hausa languages. Built using ReactJs, DxGpt API, Gemini, Microsoft Azure Ai Translator and Tailwind CSS, LikitaAI aims to provide accessible healthcare information to users.",
    github: "https://github.com/Raph3rr/LikitaAi",
    demo: "https://likitaai.vercel.app/",
  },
  {
    image: cradle,
    title: "Cradle",
    description:
      "A platform for designers and developers to connect, collaborate, and grow together. Built using React and Tailwind CSS, this project focuses on clean UI design, smooth scrolling navigation, and a modern SaaS-style layout. ",
    github: "https://github.com/Raph3rr/Cradle",
    demo: "https://cradle-dun.vercel.app/",
  },
  {
    image: gerolab,
    title: "Gerolab",
    description:
      "Gerolab is a web application that provides users with a platform to access laboratory services and information. Built using Html, Css and Js, Gerolab aims to streamline the process of booking lab tests, accessing results, and managing health records online.",
    github: "https://github.com/Raph3rr/Gerolab",
    demo: "https://gerolab.vercel.app/",
  },
  {
    image: caleb,
    title: "Caleb Portfolio",
    description:
      "Caleb's Portfolio: A professional data analyst portfolio website designed to showcase analytical projects, dashboards, and skills, built using React and Tailwind.",
    github: "https://github.com/Raph3rr/Caleb-Portfolio",
    demo: "https://caleb-portfolio-rouge.vercel.app/",
  },
  {
    image: tech,
    title: "Tech School",
    description:
      "Tech School: A tech academy platform offering practical learning tracks in web development, data analysis, and cybersecurity, built using React and Tailwind with a modern SaaS layout.",
    github: "https://github.com/Raph3rr/Tech-school",
    demo: "https://tech-school-theta.vercel.app/",
  },
];

function Projects() {
  return (
    <section className="project-section">
      <Container>
        <h1 className="section-title">
          My Recent <strong>Works</strong>
        </h1>
        <p className="section-intro">Here are a few projects I've worked on recently.</p>
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Projects;
