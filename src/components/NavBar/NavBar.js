import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const NavBar = () => {
  const handleSearch = (event) => {
    event.preventDefault();
  };

  const downloadResume = () => {
    html2canvas(document.querySelector("#resume")).then((canvas) => {
      // document.body.appendChild(canvas); // if you want see your screenshot in body.
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("mh shifat's resume.pdf");
    });
  };

  const NavItems = (
    <Nav className="ml-auto">
      <Nav.Link>Experiences</Nav.Link>
      <Nav.Link>Projects</Nav.Link>
      <Nav.Link>Articles</Nav.Link>
      <Nav.Link onClick={downloadResume}>Resume</Nav.Link>
      <Nav.Link>More</Nav.Link>
      {/* <Nav.Link>
        Visitors<Badge variant="success">5</Badge>
        <span className="sr-only">Visitors</span>
      </Nav.Link> */}
    </Nav>
  );

  return (
    <Container fluid>
      <Navbar bg="light" variant="light" expand="lg" fixed="top">
        {/* <Link to="/" className="navbar-brand"> */}
          {/* <img src="https://img.icons8.com/ios-glyphs/48/000000/user-male-circle.png" /> */}
          
        {/* </Link> */}
        <Nav.Link><a href="/">S H I F A T</a>.com</Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">{NavItems}</Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
