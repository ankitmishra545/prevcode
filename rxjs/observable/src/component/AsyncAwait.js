import React, { useRef } from 'react'

function AsyncAwait() {

    const dataOneRef = useRef();
    const dataTwoRef = useRef();
    const dataThreeRef = useRef();

    {/*
    // simply return value
    const getData = () => {
        return "Data recieved";
    }*/}

    // "async" keyword before function always returns a promise 
    const getData = async () => {
        return "Data recieved";
    }
    console.log(getData());

    // now how we handle promise
    getData().then(data => console.log(data));
    getData().then(console.log); // shorter code to print 

    // 'await' waits for promise to resolve/settle

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Await Data recieved");
        },5000)
    })

    const data = async() => {
        let response = await promise;
        console.log(response);
    }
    data();

    const dell = {
        brand: "Dell",
        status: "Available",
        color: "Black"
    }

    const buyLaptop = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dell);
        },3000);
    })

    // Ex - 01 : using promise

    const getPromiseValue = () => {
        dataOneRef.current.innerHTML = "Fetching data...";
        buyLaptop.then((res) => {            
            dataOneRef.current.innerHTML = JSON.stringify(res);
            console.log(res);
        })
    }

    // Ex - 02 : using Async/Await

    const getAsyncAwaitValue = async () => {
        dataTwoRef.current.innerHTML = "Fetching data...";        

        let res = await buyLaptop;
            
        dataTwoRef.current.innerHTML = JSON.stringify(res);

    }

    // Ex - 03 : using Fetch Api

    let buyLaptop2 = fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json()
    )


    // promise
    // const getFetchValue = () => {
    //     dataThreeRef.current.innerHTML = "Fetching data...";

    //     buyLaptop2.then(res => {
    //         dataThreeRef.current.innerHTML = JSON.stringify(res);
    //     })
    // }


    // Async/Await

    const getFetchValue = async () => {
        dataThreeRef.current.innerHTML = "Fetching data...";

        let res = await buyLaptop2;
            dataThreeRef.current.innerHTML = JSON.stringify(res);        
    }


  return (
    <div>
        <h1>AsyncAwait</h1>
        <br/>
        <div className='allDiv'>
            <div className='col-mod-4'>
                <strong>Ex - 01 : With Promise</strong>
                <hr/>
                <button className='btn btn-primary' onClick={() => {
                    getPromiseValue();
                }}>Buy Laptop</button>
                <hr/>
                <div ref={dataOneRef}>Data</div>
            </div>
            <div className='col-mod-4'>
                <strong>Ex - 02 : With Async/Await</strong>
                <hr/>
                <button className='btn btn-primary' onClick={() => {
                    getAsyncAwaitValue();
                }}>Buy Laptop</button>
                <hr/>
                <div ref={dataTwoRef}>Data</div>
            </div>
            <div className='col-mod-4'>
                <strong>Ex - 03 : With Fetch API</strong>
                <hr/>
                <button className='btn btn-primary' onClick={() => {
                    getFetchValue();
                }}>Buy Laptop</button>
                <hr/>
                <div ref={dataThreeRef}>Data</div>
            </div>
        </div>
    </div>
  )
}

export default AsyncAwait