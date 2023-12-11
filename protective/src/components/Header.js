import React from 'react'
import NavLinks from './NavLinks'
import { Outlet } from 'react-router-dom'

function Header(props) {
  const getValue = (data) => {
    // console.log(data);
    // props.value1(data);
  }

  return (
    <div>        
      <NavLinks value ={getValue}></NavLinks>
      <Outlet className="outlet"/>        
    </div>
  )
}

export default Header