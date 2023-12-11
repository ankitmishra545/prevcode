import React from 'react'
import Header from '../Header'
import ClientsContent from './contents/ClientsContent'

function Clients() {
  return (
    <div className='homeContainer'>
        <div>
            <Header></Header>
        </div>
        <div className='linksContent'>
            <ClientsContent></ClientsContent>
        </div>        
    </div>
  )
}

export default Clients