import React from 'react'
import Header from '../Header'
import EmployeesContent from './contents/EmployeesContent'

function Employees() {
  return (
    <div className='homeContainer'>
        <div>
            <Header></Header>
        </div>
        <div className='linksContent'>
          <EmployeesContent></EmployeesContent>
        </div>        
    </div>
  )
}

export default Employees