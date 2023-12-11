import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators"

const Navbar = () => {

  const store = useSelector((store) => {
    return store.cart;
  })

  return (
    <div className='navbarContainer'>
        <span className='logo'>Redux Store</span>
        <div>
          <Link className='navLinks' to='/'>Home</Link>
          <Link className='navLinks' to='/cart'>Cart</Link>
          <span className='cartCount'>
            <BadgeContainer>
              <span className="k-icon k-i-cart k-icon-xl" style={{color: "blue"}}/>
              {store.length ? <Badge>{store.length}</Badge> : null}
            </BadgeContainer>
          </span>
        </div>
    </div>
  )
}

export default Navbar