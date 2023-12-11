import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const Header = () => {
    return(
        <div className='linksAndPage'>
            <div>
                <div>
                    <button className='btn btn-primary' data-bs-toggle="offcanvas"></button>
                </div>
                {/* <div>
                    <Link to='/'>Home</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/products'>Products</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/clients'>Clients</Link>
                    <Link to='/employees'>Employee</Link>
                    <Link to='/login'>Log Out</Link>
                </div> */}
                <div>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                </div>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}

export default Header;