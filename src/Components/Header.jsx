import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import "../index2.css"
function Header() {


  return (
    <>
   
    <Navbar expand="lg" className="py-2 py-md-3 text-uppercase navlinks fixed-top position-fixed">
      <Container className="py-2 text-white nav-bg">
        <Navbar.Brand as={Link} to="/">
          <img src="images/logo.svg" className='img' alt="logo" />
        </Navbar.Brand>

        
      

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
            <Nav.Link as={Link} to="/education">Education</Nav.Link>
            <Nav.Link as={Link} to="/experience">Experience</Nav.Link>
            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </>
  );
}

export default Header;
