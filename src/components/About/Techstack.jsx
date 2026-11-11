import { SiNextdotjs } from "react-icons/si";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";

const skills = [
  [Javascript, "Javascript", "JavaScript"],
  [Typescript, "Typescript", "TypeScript"],
  [Node, "Node.js", "Node.Js"],
  [ReactIcon, "React", "React.Js"],
  [null, "Next.js", "Next.js"],
  [Git, "Git", "Git"],
  [SQL, "PostgreSQL", "Postgresql"],
  [Python, "Python", "Python"],
  [Java, "Java", "Java"],
  [Tailwind, "Tailwind CSS", "Tailwind CSS"],
];

function Techstack() {
  return (
    <div className="tech-grid" aria-label="Professional skill set">
      {skills.map(([icon, alt, label]) => (
        <div className="tech-icons" key={label}>
          {icon ? <img src={icon} alt={alt} /> : <SiNextdotjs aria-label={alt} />}
          <span className="tech-icons-text">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
