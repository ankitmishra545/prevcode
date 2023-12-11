import React from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux'

function ClientsContent() {

    const storeObject = useSelector((store) => {
        return store.employees;
    })
    
  return (
    <div>
        <Table striped bordered hover variant="success">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>Domain</th>
                </tr>
            </thead>
            <tbody>
                {
                    storeObject.map((object,index) => {
                        return <tr>
                            <td>{index+1}</td>
                            <td><img src={object.image} width={"100px"} height={"60px"}></img></td>
                            <td>{object.maidenName} {object.lastName}</td>
                            <td>{object.age}</td>
                            <td>{object.gender}</td>
                            <td>{object.email}</td>
                            <td>{object.domain}</td>
                        </tr>
                    })
                }
        
            </tbody>
        </Table>
    </div>
  )

}

export default ClientsContent