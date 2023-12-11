import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return (
    <div className='sidebar close'>
        <div className='logoDetails'>
            <i className='bx bxl-c-plus-plus'></i>
            <span className='logoName'>LogoName</span>
        </div>
        <ul className='navLinks'>
            <li>
                <Link to='/'>
                    <i className='bx bx-grid-alt'></i>
                    <span className='linkName'>Dashboard</span>
                </Link>
                <ul className='subMenu'>
                    <li><Link to='/' className='linkName'>Dashboard</Link></li>
                </ul>  
            </li>
            <li>
                <div className='iconLinks'>
                    <Link to='/'>
                        <i className='bx bx-collection'></i>
                        <span className='linkName'>Category</span>
                    </Link>
                    <i className='bx bxs-chevron-down'></i>
                </div>
                <ul className='subMenu'>
                    <li><Link to='/' className='linkName'>Category</Link></li>
                    <li><Link to='/'>Web Design</Link></li>
                    <li><Link to='/'>Card Design</Link></li>
                    <li><Link to='/'>Login Form</Link></li>
                </ul>                
            </li>
            <li>
                <div className='iconLinks'>
                    <Link to='/'>
                        <i className='bx bx-collection'></i>
                        <span className='linkName'>Posts</span>
                    </Link>
                    <i className='bx bxs-chevron-down'></i>
                </div>
                <ul className='subMenu'>
                    <li><Link to='/' className='linkName'>Posts</Link></li>
                    <li><Link to='/'>HTML</Link></li>
                    <li><Link to='/'>CSS</Link></li>
                    <li><Link to='/'>JAVASCRIPT</Link></li>
                </ul>                 
            </li>
        </ul>
    </div>
  )
}

export default SideBar