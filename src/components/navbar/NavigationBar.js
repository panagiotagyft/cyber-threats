import "./NavigationBar.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar">
      <Container className="navbar-container">
        <Nav className="navbar-nav">
          <NavLink to="/" className="nav-link special-link">Cyber-Threats</NavLink>
          <NavLink to="/" end className="nav-link">Home</NavLink>
          <NavLink to="/visualization" className="nav-link">Visualization</NavLink>
          <NavLink to="/scrollytelling" className="nav-link">Scrollytelling</NavLink>
          <NavLink to="/presentation" className="nav-link">Presentation</NavLink>
          <NavLink to="/credits" className="nav-link">Credits</NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
