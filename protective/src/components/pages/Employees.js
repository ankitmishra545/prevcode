import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Table from 'react-bootstrap/Table';
import { messageService } from '../Message';

function Employees() {

  const storeObject = useSelector((store) => {
    return store.employees;
})

const [number, setNumber] = useState("Select");

useEffect(() => {
    messageService.getMessage().subscribe((message) => {
        if(message){
            console.log(message);
            setNumber(message.text);
        }else{
            console.log("empty message");
        }
    })
},[])

  return (
    <div className='linksContent'>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Selected Value</th>
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
                        return <tr key={index}>
                            <td>{index+1}</td>
                            <td>{number}</td>
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

export default Employees