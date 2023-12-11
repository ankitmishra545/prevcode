import React from 'react'
import Header from '../Header'
import ProductsContent from './contents/ProductsContent'

function Products() {
  return (
    <div className='homeContainer'>
        <div>
            <Header></Header>
        </div>
        <div className='linksContent'>
            <ProductsContent></ProductsContent>
        </div>        
    </div>
  )
}

export default Products