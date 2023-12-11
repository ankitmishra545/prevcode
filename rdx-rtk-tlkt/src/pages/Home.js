import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div className='homeContainer'>
        <h2>Welcome to the Redux Toolkit store</h2>
        <section>
            <h3>Products</h3>
            <Products/>
        </section>
    </div>
  )
}

export default Home