import React from 'react'; 
import {Navbar, Nav, Container} from 'react-bootstrap'
import classes from "./Navigation.module.css"; 

const Navigation = () =>{
    return(
        <Navbar expand="lg" className={classes.colorNav}>
          <Container fluid>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#Home" className="m-auto"><h4 className={classes.linkText}>Home</h4></Nav.Link>
                <Nav.Link href="#About" className="m-auto"><h4 className={classes.linkText}>About</h4></Nav.Link>
                <Nav.Link href="#Projects" className="m-auto"><h4 className={classes.linkText}>Projects</h4></Nav.Link>
                <Nav.Link href="#Contact"className="m-auto"><h4 className={classes.linkText}>Contact</h4></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    )
}

export default Navigation