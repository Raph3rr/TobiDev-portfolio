import windows from "../../Assets/TechIcons/windows.png";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";

const tools = [
  [windows, "Windows", "Windows"],
  [chrome, "Google Chrome", "Google Chrome"],
  [vsCode, "Visual Studio Code", "Vs Code"],
  [intelliJ, "IntelliJ IDEA", "IntelliJ"],
];

function Toolstack() {
  return (
    <div className="tech-grid" aria-label="Tools used">
      {tools.map(([icon, alt, label]) => (
        <div className="tech-icons" key={label}>
          <img src={icon} alt={alt} className="tech-icon-images" />
          <span className="tech-icons-text">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
