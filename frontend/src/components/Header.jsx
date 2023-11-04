import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark">
      <Container>
        <Link to={"/"} style={{textDecoration:'none'}}>
          <Navbar.Brand className="font-weight-bolder text-light text text-decoration-none" href="#home">
            Home
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link to={"/login"} style={{textDecoration:'none'}}>
            <Nav.Link href="#deets" className="font-weight-normal text-light">Sign In</Nav.Link>
            </Link>
            <Link to={'/signup'} style={{textDecoration:'none'}}>
              <Nav.Link eventKey={2} href="#memes" className="font-weight-normal text-light text-decoration-none">
                Sign Up
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
