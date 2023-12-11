import React, { useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux'
import { messageService } from '../Message';

function Clients() {

  const [number, setNumber] = useState("Select");

  const storeObject = useSelector((store) => {
    console.log("store",store)
    return store.employees.employees;
  })

  useEffect(() => {
    messageService.getMessage().subscribe((message) => {
        if(message){
            setNumber(message.text);
        }else{
            console.log("empty message");
        }
    })
  },[])

  return (
    <div className='linksContent'>
        <Table striped bordered hover variant="success">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Selected Value</th>
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
                        return <tr key={index}>
                            <td>{index+1}</td>
                            <td>{number}</td>
                            <td><img src={object.image} width={"100px"} height={"60px"} alt={object.firstName}></img></td>
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

export default Clients