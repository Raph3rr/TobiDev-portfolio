import Card from "react-bootstrap/Card";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";

function ProjectCard({ image, title, description, github, demo, isBlog = false }) {
  return (
    <article className="project-card">
      <Card className="project-card-view">
        <Card.Img variant="top" src={image} alt={`${title} project preview`} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <div className="project-card-actions">
            {github && (
              <a className="project-action" href={github} target="_blank" rel="noopener noreferrer">
                <BsGithub aria-hidden="true" /> {isBlog ? "Blog" : "GitHub"}
              </a>
            )}
            {!isBlog && demo && (
              <a className="project-action" href={demo} target="_blank" rel="noopener noreferrer">
                <CgWebsite aria-hidden="true" /> Demo
              </a>
            )}
          </div>
        </Card.Body>
      </Card>
    </article>
  );
}

export default ProjectCard;
