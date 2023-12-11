import React, { useState } from 'react'
import { data } from '../Data'
import Accordion from 'react-bootstrap/Accordion';
import { FiChevronRight } from "react-icons/fi";
import 'primeicons/primeicons.css';

function Follow() {

  let count = 1;
  let indexNumber = 1;
  const [accord, setAccord] = useState(false);

  const accordianChange = () => {
    setAccord(!accord);
  }

  let sourceData = data.lstVendorAnalytics;

  // console.log(sourceData)

  const uniqueArray = new Array(...new Set(sourceData.map((object) => (
    JSON.stringify({
      CustomerName: object.CustomerName,
      VendorName: object.VendorName,
      ShipToName: object.ShipToName,
      Addr1: object.Addr1,
      CityName: object.CityName,
      StateCode: object.StateCode,
      LocationType: object.LocationType
    })
  ))))

  const resultedData = uniqueArray.map((object) => {
    let parsedData = JSON.parse(object);
    let filteredData = sourceData.filter((info) => {

      const infoData = JSON.stringify({
        CustomerName: info.CustomerName,
        VendorName: info.VendorName,
        ShipToName: info.ShipToName,
        Addr1: info.Addr1,
        CityName: info.CityName,
        StateCode: info.StateCode,
        LocationType: info.LocationType
      })

      return infoData === object;

    })

    const uniqueOrder = new Array(...new Set(filteredData.map((object) => object.OrderNumber)))

    return { data1: parsedData, count: filteredData, order: uniqueOrder }
  })

  const totalOrderNumber = (order, orderDetails) => {
    let filteredData = sourceData.filter((info) => {

      const infoData = JSON.stringify({
        CustomerName: info.CustomerName,
        VendorName: info.VendorName,
        ShipToName: info.ShipToName,
        Addr1: info.Addr1,
        CityName: info.CityName,
        StateCode: info.StateCode,
        LocationType: info.LocationType
      })
      return infoData === JSON.stringify(orderDetails) && order === info.OrderNumber;
    })
    return filteredData;
  }

  console.log(resultedData);

  return (
    <div className='linksContent accordianDiv'>
      <div className={accord ? 'verticalAccordian' : 'verticalAccordianCollapse'}>
        <div className='vericalAccordianHeader'>
          <button onClick={() => { accordianChange() }}><FiChevronRight /></button>
        </div>
        <div></div>
      </div>
      <div>
        <Accordion defaultActiveKey="1">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              <div>
                <h1>abc</h1>
                <p>abc</p>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br />

        <div className='tableDiv'>
          <table className='dataTable'>
            <thead>
              <tr>
                <th>Index</th>
                <th>Customer Name</th>
                <th>Vendor Name</th>
                <th>Ship To Name</th>
                <th>Address</th>
                <th>CityName</th>
                <th>StateCode</th>
                <th>Location Type</th>
                <th>Order Number</th>
                <th>Order Id</th>
                <th>Product Description</th>
                <th>Delivery Date</th>
                <th>File</th>
                <th>Gallons</th>
                <th>Product Price</th>
                <th>Tax Price</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Fees</th>
                <th>Average Gross</th>
                <th>Product ID</th>
                <th>Product Unit Price</th>
                <th>Tax Unit Price</th>
                <th>Other Fee</th>
                <th>Delivery Fee</th>
                <th>Environmental Fee</th>
                <th>Page Number</th>
                <th>Terminal GroupID</th>
                <th>Loading Time</th>
                <th>SiteSetupTime</th>
                <th>Customer ID</th>
              </tr>
            </thead>
            <tbody className='tableBody'>
              {
                resultedData.map((obj, index) => {
                  const spanValue = obj.count.length + obj.order.length + 1;
                  return <>
                    
                    <tr key={index}>
                      {/* <td rowSpan={spanValue} className='indexCell'>{
                        obj.count.map(() => {
                          return <p>{count++}</p>
                      })                        
                        }</td> */}
                      <td rowSpan={spanValue}><strong>{count++}</strong></td>
                      <td rowSpan={spanValue}>{obj.data1.CustomerName}</td>
                      <td rowSpan={spanValue}>{obj.data1.VendorName}</td>
                      <td rowSpan={spanValue}>{obj.data1.ShipToName}</td>
                      <td rowSpan={spanValue}>{obj.data1.Addr1}</td>
                      <td rowSpan={spanValue}>{obj.data1.CityName}</td>
                      <td rowSpan={spanValue}>{obj.data1.StateCode}</td>
                      <td rowSpan={spanValue}>{obj.data1.LocationType}</td>
                    </tr>
                    {obj.order.map((subObj) => {
                      const values = {
                        envirnomentalFee: 0,
                        productPrice:0,
                        taxPrice:0,
                        fee:0,
                        productUnitPrice:0,
                        taxUnitPrice:0,
                        otherFee:0,
                        deliveryFee:0,
                        gallons:0
                      }                      
                      const numberOfOrder = totalOrderNumber(subObj, obj.data1);
                      let spanNumber = numberOfOrder.length+1; 
                      let spanCount = 0;                   

                      return <> 
                      {numberOfOrder.map((orderObj, index) => {                        
                        spanNumber = spanNumber - 1;
                        spanNumber > 1 ? spanCount = 1 : spanCount = 2;
                        const date = new Date(orderObj.DeliveryDate);
                        const deliveryDate = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`

                        values.envirnomentalFee= values.envirnomentalFee + orderObj.EnvironmentalFee;
                        values.productPrice = values.productPrice + orderObj.ProductPrice;
                        values.taxPrice = values.taxPrice + orderObj.TaxPrice;
                        values.fee = values.fee + orderObj.Fees;
                        values.productUnitPrice = values.productUnitPrice + orderObj.ProductUnitPrice;
                        values.taxUnitPrice = values.taxUnitPrice + orderObj.TaxUnitPrice;
                        values.otherFee = values.otherFee + orderObj.OtherFee;
                        values.deliveryFee = values.deliveryFee + orderObj.DeliveryFee;
                        values.gallons = values.gallons + orderObj.Gallons;

                        return <tr key={index}>
                          <td rowSpan={spanNumber>=1? spanCount : spanCount }>{indexNumber++}</td>
                          <td>{orderObj.OrderNumber}</td>
                          <td>{orderObj.ProdDesc}</td>
                          <td>{deliveryDate}</td>
                          <td><i className='bx bxs-file-pdf'></i></td>
                          <td>{orderObj.Gallons}</td>
                          <td>{orderObj.ProductPrice}</td>
                          <td>{orderObj.TaxPrice}</td>
                          <td>{orderObj.Latitude}</td>
                          <td>{orderObj.Longitude}</td>
                          <td>{orderObj.Fees}</td>
                          <td>{orderObj.AverageGross}</td>
                          <td>{orderObj.ProductID}</td>
                          <td>{orderObj.ProductUnitPrice}</td>
                          <td>{orderObj.TaxUnitPrice}</td>
                          <td>{orderObj.OtherFee}</td>
                          <td>{orderObj.DeliveryFee}</td>
                          <td>{orderObj.EnvironmentalFee}</td>
                          <td>{orderObj.PageNumber}</td>
                          <td>{orderObj.TerminalGroupID}</td>
                          <td>{orderObj.LoadingTime}</td>
                          <td>{orderObj.SiteSetupTime}</td>
                          <td>{orderObj.CustomerID}</td>
                        </tr>
                      })}
                      <tr className='subTotalRow'>
                        {/* <td></td> */}
                        <td><strong>Sub Totals</strong></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>{values.gallons}</td>
                        <td>{values.productPrice}</td>
                        <td>{values.taxPrice}</td>
                        <td></td>
                        <td></td>
                        <td>{values.fee}</td>
                        <td></td>
                        <td></td>
                        <td>{values.productUnitPrice}</td>
                        <td>{values.taxUnitPrice}</td>
                        <td>{values.envirnomentalFee}</td>
                        <td>{values.otherFee}</td>
                        <td>{values.deliveryFee}</td>
                        <td>{values.envirnomentalFee}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      </>
                    })}
                  </>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Follow