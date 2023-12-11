import React, {useEffect, useRef, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Spinner from 'react-bootstrap/Spinner';

function DataDisplay() {

  let selectedInputRef = useRef();

  let spinnerRef = useRef();

    let [data, setData] = useState([]);
    let [keys, setKeys] = useState([]);

    let [active, setActive] = useState(1);

    useEffect(() => {
      getData(1);
    },[]);

    let getData = async(range) => {

      spinnerRef.current.style.display = "block";

      setActive(range); 
      
      let JSONData = await fetch("https://api.publicapis.org/entries");

        let JSOData = await JSONData.json();
        let firstIndex = range*100-100;
        let lastIndex = range*100;
        let entries = JSOData.entries.slice(firstIndex,lastIndex);

        spinnerRef.current.style.display = "none";
        setData(entries);
        
      setKeys(Object.keys(entries[0]));

    }

    

let items = [];
for (let number = 1; number <= 15; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}  onClick={() => {
    getData(number)}}>
      {number}
    </Pagination.Item>,
  );
  }

  let changedSelection = () => {
    console.log(selectedInputRef.current.value);

  }

   
  return (
    <div>
      <div className='headerContainer'></div>
      <div className='paginationAndSpinner'>
        <div className='spinner' ref={spinnerRef} >  
      <Spinner animation="border" variant="success" />
          </div>
          <div>
          <Pagination  className='pageItemsContainer'>{items}</Pagination>
          </div>
      </div>
    <Table striped bordered hover size="sm" className='tableContainer'>
      <thead>
        <tr>          
        <th>Sr. No.</th>
        {keys.map((element) => {
          return <th>{element}</th>
        })}
        </tr>        
      </thead>
      <tbody>
        {
        data.map((object,count) => {   
            
            return <tr>
                <td>{count+1}</td>
                <td>{object.API}</td>
                <td>{object.Description}</td>
                <td>{object.Auth}</td>
                <td>{object.HTTPS.toString()}</td>
                <td>{object.Cors}</td>
                <td>{object.Link}</td>
                <td>{object.Category}</td>
                </tr>;
        })}
      </tbody>
    </Table>
    </div>
  )
}

export default DataDisplay;