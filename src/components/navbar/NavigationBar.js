// import React, { useContext } from "react";
import "./NavigationBar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { LanguageContext } from "../../context/LanguageContext";

const NavigationBar = () => {
//   const { language, toggleLanguage, translations } = useContext(LanguageContext);

  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container className="navbar-container">
        <Nav className="navbar-nav">
          <Nav.Link as={Link} to="/" className="special-link">Cyber-Threats</Nav.Link>
          <Nav.Link as={Link} to="/" className="nav-link">Home</Nav.Link>
          <Nav.Link as={Link} to="/visualization" className="nav-link">Visualization</Nav.Link>
          <Nav.Link as={Link} to="/scrollytelling" className="nav-link">Scrollytelling</Nav.Link>
          <Nav.Link as={Link} to="/presentation" className="nav-link">Presentation</Nav.Link>
          <Nav.Link as={Link} to="/credits" className="nav-link">Credits</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;