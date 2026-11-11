import { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY >= 20);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar
      expanded={expanded}
      onToggle={setExpanded}
      fixed="top"
      expand="md"
      className={hasScrolled ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" onClick={closeMenu}>
          <span className="brand-bracket">&lt;</span>
          <span className="brand-highlight">Tobi</span>Dev
          <span className="brand-bracket"> /&gt;</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end onClick={closeMenu}>
              <AiOutlineHome aria-hidden="true" /> Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={closeMenu}>
              <AiOutlineUser aria-hidden="true" /> About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/project" onClick={closeMenu}>
              <AiOutlineFundProjectionScreen aria-hidden="true" /> Projects
            </Nav.Link>
            <Nav.Link as={NavLink} to="/resume" onClick={closeMenu}>
              <CgFileDocument aria-hidden="true" /> Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
