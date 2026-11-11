import { Col, Container, Row } from "react-bootstrap";
import AboutCard from "./AboutCard.jsx";
import Github from "./Github.jsx";
import Techstack from "./Techstack.jsx";
import Toolstack from "./Toolstack.jsx";

function About() {
  return (
    <section className="about-section">
      <Container>
        <Row className="about-intro-row">
          <Col xs={12} className="about-copy-col">
            <h1 className="section-title">
              Know Who <strong>I am</strong>
            </h1>
            <AboutCard />
          </Col>
        </Row>
        <section aria-labelledby="skillset-heading">
          <h2 className="project-heading" id="skillset-heading">
            Professional <strong>Skillset</strong>
          </h2>
          <Techstack />
        </section>
        <section aria-labelledby="tools-heading">
          <h2 className="project-heading" id="tools-heading">
            <strong>Tools</strong> I use
          </h2>
          <Toolstack />
        </section>
        <Github />
      </Container>
    </section>
  );
}

export default About;
