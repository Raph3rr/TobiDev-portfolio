import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

import Home2 from "./Home2.jsx";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col className="home-header">
              <h1 className="heading">Hi There!</h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> OLASEIGBE RAPHAEL</strong>
              </h1>
              <div className="home-type-line">
                <span>Software Developer</span>
                <span className="role-separator" aria-hidden="true">
                  {" "}
                  /{" "}
                </span>
                <span>Freelancer</span>
                <span className="role-separator" aria-hidden="true">
                  {" "}
                  /{" "}
                </span>
                <span>Open Source Contributor</span>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Container className="home-content">
        <Row className="home-about-social-row">
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="lime">connect </span>with me
            </p>
            <ul
              className="home-about-social-links"
              aria-label="Social profiles"
            >
              <li className="social-icons">
                <a
                  href="https://github.com/Raph3rr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="GitHub"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/tobidev01?s=21"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="X"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tobidev01"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
