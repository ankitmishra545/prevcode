import React, { useEffect, useState } from 'react'
import { filter, from, interval, map, toArray } from 'rxjs';
import { printList } from './ServicePage';

function FilterOperator() {

    const [persons, setPersons] = useState([]);
    const [personsOne, setPersonsOne] = useState([]);
    const [personsTwo, setPersonsTwo] = useState([]);

    const users = [
        {age: 33, gender: "Male", name: 'ankit'},
        {age: 30, gender: "Female", name: 'smriti'},
        {age: 34, gender: "Male", name: 'neeraj'},
        {age: 38, gender: "Female", name: 'jhulan'},
        {age: 28, gender: "Male", name: 'chandan'},
        {age: 28, gender: "Male", name: 'ankur'},
        {age: 27, gender: "Male", name: 'atul'},
        {age: 28, gender: "Female", name: 'harmanpreet'},
        {age: 20, gender: "Female", name: 'shefali'},
    ];

    useEffect(() => {

        const observable$ = from(users);

        observable$.pipe(
            filter(data => data.name.length > 6),
            toArray()
        )
        .subscribe(res => {
            console.log(res)
            setPersons(res);
        })     
        
        observable$.pipe(
            filter(data => data.gender === "Female"),
            toArray()
        )
        .subscribe(res => {
            console.log(res)
            setPersonsTwo(res);
        }) 
    },[])

    

  return (
    <div className='m-3'>
        <h1>Filter Operator</h1>
        <br/>
        <div className='d-flex justify-content-around'>
            <div className='col-md-4'>
                <strong>Ex- 01</strong>
                <hr/>
                <p className='bg-light py-2 px-3 border rounded'>
                    <strong>Filter:</strong> by name length
                </p>
                <br/>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {persons.map((object,index) => {
                            return <tr key={index}>
                                <td>{object.name}</td>
                                <td>{object.age}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
            <div className='col-md-4'>
                <strong>Ex- 02</strong>
                <hr/>
                <p className='bg-light py-2 px-3 border rounded'>
                    <strong>Filter: </strong> by gender
                </p>
                <br/>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        {personsTwo.map((object,index) => {
                            return <tr key={index}>
                                <td>{object.name}</td>
                                <td>{object.age}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default FilterOperator