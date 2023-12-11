import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavLinks() {

  const currentActive = (object) => {
    if(object.isActive){
      return {backgroundColor: "rgb(171, 236, 40)", width: "150px", height: "40px", color: "whitesmoke"};
    }
  } 

  return (
    <div className='navLinksDiv' >
      {[false].map((expand) => (
        <Navbar key={expand}  expand={expand} className="mb-3" >
          <Container fluid style={{width:200}}>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"    
              style={{width:250}}                       
            >
              <Offcanvas.Header closeButton >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>                  
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body  >
                <Nav className="justify-content-end flex-grow-1 pe-3 navContainer">
                  {
                    [{route: "/home", page: "Home"},
                     {route: "/services", page: "Services"},
                     {route: "/products", page: "Products"},
                     {route: "/employees", page: "Employees"},
                     {route: "/clients", page: "Clients"},
                     {route: "/vendors", page: "Vendors"},
                     {route: "/photos", page: "Photos"},
                     {route: "/reviews", page: "Reviews"},
                     {route: "/follow", page: "Follow"},
                     {route: "/contact", page: "Contact"}
                    ].map((obj) => {
                      return <NavLink style={(object) => {
                                return currentActive(object);
                              }} 
                              to={obj.route}
                            >
                              {obj.page}
                            </NavLink>
                          })
                  }
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  )
}

export default NavLinks