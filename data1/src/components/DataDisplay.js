import React, {useEffect, useRef, useState} from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function DataDisplay() {

  let spinnerRef = useRef();
  let selectedDataInputRef = useRef();

    const [allData, setAllData] = useState([]);
    const [data, setData] = useState([]);
    const [keys, setKeys] = useState([]);
    const [active, setActive] = useState(1);
    const [length, setLength] = useState(1425);
    const [count, setCount] = useState(10);
    const [pages, setPages] = useState();
    let [srNumber, setSrNumber] = useState();
    const [i, setI] = useState(0);

    useEffect(() => {
      initialComponentLoading(1);
    },[])

    useEffect(() => {
      getData(1);
      setI(0);
      setPages(Math.ceil(length/count));
    },[count]);


    let initialComponentLoading = async(range) => {

      spinnerRef.current.style.display = "block";

      setActive(range); 
      
      let JSONData = await fetch("https://api.publicapis.org/entries");

      let JSOData = await JSONData.json();
      setLength(JSOData.entries.length);
      setPages(Math.ceil(JSOData.entries.length/count));
      setAllData(JSOData.entries);
        let entries = JSOData.entries.slice(0,10);

        spinnerRef.current.style.display = "none";
        setData(entries);
        
      setKeys(Object.keys(entries[0]));

    }

    let getData = async(range) => {

      setActive(range); 

        const firstIndex = range*count-count;
        setSrNumber(firstIndex);
        const lastIndex = range*count;
        const entries = allData.slice(firstIndex,lastIndex);
        setData(entries);

    }

    let items = [];
    for (let number = 1; number <= pages; number++) {
      items.push(number);
    }


    let selectONChange = () => {

      let countNumber = selectedDataInputRef.current.value;
      setCount(countNumber);
    }

  let prevPagination = () => {
    if(i < 5){
      setI(0);
    }else{
      getData(i-4);
      setI(i-5);
    }
  }

  let nextPagination = () => {
    if(i+5 > pages){
      console.log("if")
    }else{
      console.log("else")
      getData(i+6);
      setI(i+5);
    }
  }

  let ellipsis = () => {
    setI((Math.ceil((i+pages)/2))); 
    getData(Math.ceil((i+pages)/2)+1);
  }

   
  return (
    <div>      
      <div className='headerContainer'></div>
      <div className='mainContainer'>
        <div className='paginationAndSpinner'>
          <div>            
            <p>Showing page <strong>{active}</strong> of <strong>{pages}</strong> pages: </p>
          </div>
          <div className='spinner' ref={spinnerRef} >  
            <Spinner animation="border" variant="success" />
          </div>
          <div className='paginationDiv'>
            <Pagination>
              {['top'].map(() => (
                  <>
                    <OverlayTrigger
                      overlay={
                        <Tooltip>
                          Go to the first page
                        </Tooltip>
                      }
                    >
                      <Pagination.First onClick={() => {getData(1); setI(0)}}/>
                    </OverlayTrigger>
                    <OverlayTrigger
                      overlay={
                        <Tooltip>
                          Go to the previous set of pages
                        </Tooltip>
                      }
                    >
                      <Pagination.Prev onClick={() => {prevPagination()}} />
                    </OverlayTrigger>
                  </>
        
              ))}                            
              
              {i+1 <= pages ? <Pagination.Item onClick={() => {getData(i+1)}} active={items[i] === active}>{items[i]} </Pagination.Item> : null}
              {i+2 <= pages ? <Pagination.Item onClick={() => {getData(i+2)}} active={items[i+1] === active}>{items[i+1]}</Pagination.Item> : null}
              {i+3 <= pages ? <Pagination.Item onClick={() => {getData(i+3)}} active={items[i+2] === active}>{items[i+2]}</Pagination.Item> : null}
              {i+4 <= pages ? <Pagination.Item onClick={() => {getData(i+4)}} active={items[i+3] === active}>{items[i+3]}</Pagination.Item> : null}
              {i+5 <= pages ? <Pagination.Item onClick={() => {getData(i+5)}} active={items[i+4] === active}>{items[i+4]}</Pagination.Item> : null}
              <Pagination.Ellipsis onClick={() => {if((i+5) < pages){ellipsis()}}} />
              {['top'].map(() => (
                <>
                  <OverlayTrigger
                    overlay={
                      <Tooltip>
                        Go to the next set of pages
                      </Tooltip>
                    }
                  >
                    <Pagination.Next onClick={() => {if((i+5) < pages){nextPagination()}}} />
                  </OverlayTrigger>
                  <OverlayTrigger
                    overlay={
                      <Tooltip>
                        Go to the last page
                      </Tooltip>
                    }
                  >
                    <Pagination.Last onClick={() => {getData(pages); setI(pages-5)}}/>
                  </OverlayTrigger>
                </>
        
              ))}

              

              
            </Pagination>
          </div>
          <div className='selectionDiv'>
            <p className='selectionLabel'>Data per page: </p>
            <Form.Select ref={selectedDataInputRef} onChange={() => {selectONChange()}}>
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </Form.Select>
          </div>
        </div>
        <Table striped bordered hover size="sm" className='tableContainer'>
          <thead>
            <tr>          
              <th> # </th>
                {keys.map((element) => {
                    return <th>{element}</th>
                })}
            </tr>        
          </thead>
          <tbody>
            {
              data.map((object) => {   
              srNumber += 1;         
              return <tr>
                <td>{srNumber}</td>
                <td>{object.API}</td>
                <td>{object.Description}</td>
                <td>{object.Auth}</td>
                <td>{object.HTTPS.toString()}</td>
                <td>{object.Cors}</td>
                <td><a href={object.Link}>{object.Link}</a></td>
                <td>{object.Category}</td>
                </tr>;
              })}
          </tbody>
        </Table>
        </div>
      </div>
    )
  }

export default DataDisplay;