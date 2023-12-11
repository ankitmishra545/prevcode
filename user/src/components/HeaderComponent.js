import React, { useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


function HeaderComponent() {


  let navigate = useNavigate();

  let storedOject = useSelector((store) => {
    return store;
  })

  useEffect(() => {
    if(storedOject.userDetails.loggedIn){
      console.log("successfully login");
    }else{
      navigate("/");
      console.log("unauthorized accessing");
    }
  },[]);

  let currentActive = (object) => {
    if(object.isActive){
      return {backgroundColor: "orange", width: "100px", height: "50px", color: "whitesmoke"};
    }
  }

  

  return (
    <nav className='headerContainer'>
      <NavLink style={(object) => {
        return currentActive(object);
      }} to='/home'>Home</NavLink>
      <NavLink style={(object) => {
        return currentActive(object);
      }}  to='/data'>Data</NavLink>
      <NavLink style={(object) => {
        return currentActive(object);
      }}  to='/message'>Message</NavLink>
      <Link to='/'>Log Out</Link>
    </nav>
  )
}

export default HeaderComponent