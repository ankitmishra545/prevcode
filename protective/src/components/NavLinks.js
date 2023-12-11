import React, { useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { messageService } from './Message';

function NavLinks(props) { 

  const selectedInputRef = useRef();

  const currentActive = (object) => {
    if(object.isActive){
      return {backgroundColor: "rgb(171, 236, 40)", width: "150px", height: "40px", color: "whitesmoke"};
    }
  } ;

  useEffect(() => {
    selectedValue();
  },[])

  const logOutFunction = () => {
    localStorage.removeItem("email");
  }

  const selectedValue = () => {

    // passing value through props
    props.value(selectedInputRef.current.value);
    
    // Using local storage event listener
    localStorage.setItem("number", selectedInputRef.current.value);
    dispatchEvent(new Event("number"));

    // using rxjs
    messageService.sendMessage(selectedInputRef.current.value);
  }

  return (
    <div className='headerDiv bg-primary' >
      <div>
      {[false].map((expand) => (
        <Navbar  key={expand}  expand={expand} className="mb-3">
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
                    [{route: "/", page: "Home"},
                     {route: "/services", page: "Services"},
                     {route: "/products", page: "Products"},
                     {route: "/employees", page: "Employees"},
                     {route: "/clients", page: "Clients"},
                     {route: "/vendors", page: "Vendors"},
                     {route: "/photos", page: "Photos"},
                     {route: "/reviews", page: "Reviews"},
                     {route: "/follow", page: "Follow"},
                     {route: "/contact", page: "Contact"}
                    ].map((obj,index) => {
                      return <NavLink style={(object) => {
                                return currentActive(object);
                              }} 
                              to={obj.route}
                              key={index}
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
      <div className='selectAndLogoutDiv'>
        <select /*defaultValue={1}*/ ref={selectedInputRef} onChange={() => {selectedValue()}}>
          <option>Select</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        <div>
          <Link to='/login' onClick={() => {logOutFunction()}}>Log Out</Link>
        </div>
      </div>
      
    </div>
  )
}

export default NavLinks