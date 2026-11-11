import { Col, Container, Row } from "react-bootstrap";
import dp from "../../Assets/dp.png";

function Home2() {
  return (
    <section className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1>
              LET ME <span className="lime"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Engineer who loves transforming ideas into
              reliable, scalable products. Over time, I’ve explored several
              technologies and found my passion in building high-performance
              systems and intuitive user experiences.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="lime">
                  {" "}JavaScript, Node.js, ReactJs and Java{" "}
                </b>
              </i>
              — and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="lime">{" "}Web Applications,{" "}</b>
              </i>
              and exploring new ways to bridge on-chain and off-chain systems.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="lime"> Node.js </b> and modern frameworks like{" "}
              <i>
                <b className="lime">React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <img src={dp} className="img-fluid" alt="Raphael at work" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home2;
