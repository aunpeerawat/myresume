import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ScrollButton from "./ScrollButton";

function NavScroll() {
  return (<div className="">
    <Navbar expand="lg" className="navbar " data-bs-theme="light">
      
        <Navbar.Brand>
          <div className="menu">
            <MenuBookIcon style={{ marginRight: "8px" }} />
            <h3 className="fw-bold">Menu</h3>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle  className="" aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <ScrollButton
                name="Profile"
                id="profileTopic"
                to="profileSection"
              />
            </Nav.Link>
            <Nav.Link href="#action2">
              <ScrollButton name="Skills" id="skillsTopic" to="skillsSection" />{" "}
            </Nav.Link>
            <Nav.Link href="#action2.5">
              <ScrollButton name="Code-Experiences" id="code-exTopic" to="code-exSection" />{" "}
            </Nav.Link>
            <Nav.Link href="#action3">
              <ScrollButton
                name="Certificates"
                id="certificateTopic"
                to="certificateSection"
              /></Nav.Link>
            <Nav.Link href="#action3.5">
              <ScrollButton
                name="Projects"
                id="projectTopic"
                to="projectSection"
              />
            </Nav.Link>
            <Nav.Link href="#action4">
              <ScrollButton
                name="Activities"
                id="activityTopic"
                to="activitySection"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar></div>
  );
}

export default NavScroll;