import React from 'react'
import { useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';

function EmployeesContent() {

    const storeObject = useSelector((store) => {
        return store.employees;
    })
    
  return (
    <div>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Birth Date</th>
                    <th>Blood group</th>
                    <th>Username</th>
                    <th>SSN</th>
                </tr>
            </thead>
            <tbody>
                {
                    storeObject.map((object,index) => {
                        return <tr>
                            <td>{index+1}</td>
                            <td>{object.firstName} {object.lastName}</td>
                            <td>{object.birthDate}</td>
                            <td>{object.bloodGroup}</td>
                            <td>{object.username}</td>
                            <td>{object.ssn}</td>
                        </tr>
                    })
                }
        
            </tbody>
        </Table>
    </div>
  )
}

export default EmployeesContent