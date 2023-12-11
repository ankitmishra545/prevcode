import React, { useState } from 'react'

function Promis() {   

    const dellAvailable = () => {
        return false;
    }

    const hpAvailable = () => {
        return false;
    }

    const dell = {
        brand: "Dell",
        status: "Available"
    }

    const hp = {
        brand: "HP",
        status: "Available"
    }

    const notAvailable = {
        status: "Not Available"
    }

    const [promiseValue, setPromiseValue] = useState();

    let buyLaptop = new Promise((resolve, reject) => {
        // either resolve or reject only one 
            // resolve("Promise is resolved");
            // reject("Promise is rejected");

        if(dellAvailable()){
            setTimeout(() => {
                // resolve("Dell is available");
                resolve(dell);
            },5000)
        }else if(hpAvailable()){
            setTimeout(() => {
                // resolve("HP is available");
                resolve(hp);
            },5000)
        }else{
            setTimeout(() => {
                // reject("No laptop available in store");
                reject(notAvailable);
            },5000)
            
        }


    })

    // then executed when promise is resolved
    // res, this we get from promise after execting
    buyLaptop.then((res) => {
        console.log("Success, then response=> ", res);
        setPromiseValue(res);
    }).catch((res) => {
        console.log("Failed, catch response=> ", res)
        setPromiseValue(res);
    })

  return (

    // any response is either definite or indefinite time, to handle the responses of requests where response time is unknown are asynchronous, tohandle this javascript uses promises.
    <div className='my-3'>
        <h2>Promise</h2>
        <br></br>
        {/* <p><strong>{promiseValue}</strong></p> */}
    </div>
  )
}

export default Promis