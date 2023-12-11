import React from 'react';
import HeaderComponent from './HeaderComponent';
import { useSelector } from 'react-redux';

function Home() {

    let storedOject = useSelector((store) => {
        return store;
    })

  return (
    <div>
        <HeaderComponent></HeaderComponent>
        <div className='homeContainer'>
        <img src={storedOject.userDetails.profilePic} alt=''></img>
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <td>{storedOject.userDetails.name}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>{storedOject.userDetails.email}</td>
                </tr>
                <tr>
                    <th>Mob.</th>
                    <td>{storedOject.userDetails.mobile}</td>
                </tr>
                <tr>
                    <th>City</th>
                    <td>{storedOject.userDetails.city}</td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Home