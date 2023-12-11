import React, { useEffect, useState } from 'react'
import { from, take } from 'rxjs';

function RetryOperator() {

    const [person, setPerson] = useState({});
    const [fetching, setFetching] = useState(false);

    const getData = async () => {
        setFetching(true);
       const source = from(await (await fetch("https://jsonplaceholder.typicode.com/users")).json())
       source.pipe(take(1))
       .subscribe((res) => {
            setPerson(res)
            setFetching(false)
        },
       (error) => {console.log(error);
        
        setFetching(false)
    })

       
    } 

  return (
    <div className='m-3'>
        <h1>RetryOperator</h1>
        <br/>
        <div className='d-flex justify-content-around'>
            <div className='col-md-8'>
                <table className='table'>
                    <tbody>
                        <tr>
                            <th>Id</th>
                            <td>{person.id}</td>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <td>{person.name}</td>
                        </tr>
                        <tr>
                            <th>User Name</th>
                            <td>{person.username}</td>
                        </tr>
                        <tr>
                            <th>Email</th>
                            <td>{person.email}</td>
                        </tr>
                        <tr>
                            <th>Phone</th>
                            <td>{person.phone}</td>
                        </tr>
                    </tbody>
                </table>
                <button className='btn btn-primary' onClick={() => getData()} type='button'>
                    {fetching ? <span className='spinner-border spinner-border-sm' role='status' aria-hidden='true'/> : ''}
                    Fetch Data
                </button>
            </div>
        </div>
    </div>
  )
}

export default RetryOperator