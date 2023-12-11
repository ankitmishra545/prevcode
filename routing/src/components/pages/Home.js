import React, { useEffect } from 'react'
import Header from '../Header'
import HomeContent from './contents/HomeContent'
import { useDispatch } from 'react-redux'

function Home() {

  const dispatch = useDispatch();

  useEffect(() => {
    productDetails();
    employeesDetails();
    // CartDetails();
  })

  const productDetails = async () => {
    const result = await( 
      (await 
        fetch("https://dummyjson.com/products")
      ).json()
    );
    dispatch({type: "products", value: result.products})
  }

  const employeesDetails = async () => {
    const result = await( 
      (await 
        fetch("https://dummyjson.com/users")
      ).json()
    );
    dispatch({type: "employees", value: result.users})
  }

  const CartDetails = async () => {
    const result = await( 
      (await 
        fetch("https://dummyjson.com/carts")
      ).json()
    );
    dispatch({type: "cart", value: result.carts})
    console.log(result);
  }

  return (
    <div className='homeContainer'>
        <div>
            <Header></Header>
        </div>
        <div className='linksContent'>
          <HomeContent></HomeContent>
        </div>        
    </div>
  )
}

export default Home