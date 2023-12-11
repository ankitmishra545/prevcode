import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown'
import NavLinks from './NavLinks'
import { useNavigate } from 'react-router-dom'

function Header() {

    const storedObject = useSelector((store) => {
        return store.isLogged;
        
    });

    const navigate = useNavigate();

    useEffect(() => {
        if(!storedObject){
            navigate("/");            
        }
    });

  return (
    <div className='headerDiv'>
        <div>
            <NavLinks></NavLinks>
        </div>
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </div>
  )
}

export default Header