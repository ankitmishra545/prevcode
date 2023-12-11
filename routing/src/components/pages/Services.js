import React from 'react'
import Header from '../Header'
import ServicesContent from './contents/ServicesContent'

function Services() {

  return (
    <div className='homeContainer'>
        <div>
            <Header></Header>
        </div>
        <div className='linksContent'>
          <ServicesContent></ServicesContent>
        </div>   
    </div>
  )
}

export default Services