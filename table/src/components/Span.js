import * as React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import '@progress/kendo-theme-default/dist/all.css';

import products from '../Product.json';


const uniqueArray = new Array(...new Set(products.map((object) => {
  return JSON.stringify({
    CustomerName: object.CustomerName,
    VendorName: object.VendorName,
    Addr1: object.Addr1,
    ShipToName: object.ShipToName,
    StateCode: object.StateCode,
    LocationType: object.LocationType,
    CityName: object.CityName,
  })
})))

const finalArray = uniqueArray.map((object) => {
  const filteredArray = products.filter((obj)=> {
    const infoData = JSON.stringify({
      CustomerName: obj.CustomerName,
      VendorName: obj.VendorName,
      Addr1: obj.Addr1,
      ShipToName: obj.ShipToName,
      StateCode: obj.StateCode,
      LocationType: obj.LocationType,
      CityName: obj.CityName
    })

    return object === infoData;
  })

  const parsedData = JSON.parse(object);
  const uniqueOrder = new Array(...new Set(filteredArray.map((object) => object.OrderNumber)))

  return {arrayData: parsedData, uniqueOrder: uniqueOrder }
})

const subTotal = {
  CustomerName: "",
  VendorName: "",
  ShipToName: "",
  Addr1: "",
  CityName: "",
  StateName: "",
  LocationType: "",
  OrderNumber: "SubTotal",
  ProductDesc: null,
  DeliveryDate: null,
  FileName: null,
  Gallons: null,
  ProductPrice: null,
  TaxPrice: null,
  Latitude: null,
  Longitude: null,
  Fees : null,
  AverageGross: null,
  ProductID: null,
  ProductUnitPrice: null,
  TaxUnitPrice: null,
  OtherFee: null,
  DeliveryFee: null,
  EnvironmentalFee: null,
  PageNumber: null,
  TerminalGroupID: null,
  SiteSetupTime: null,
  CustomerId: null
}

const combineArray = [];
let count = 1;

const getOrderData = (number) => {
  const total = {
    ProductPrice:0,
    TaxPrice: 0,
    Fees: 0,
    TaxUnitPrice: 0,
    OtherFee: 0,
    DeliveryFee: 0,
    EnvironmentalFee: 0
  }
  products.map((object) => {
    if(number === object.OrderNumber){
      const dd = new Date(object.DeliveryDate);
      const date = `${dd.getMonth()}/${dd.getDate()}/${dd.getFullYear()}`;      
      combineArray.push({...object, DeliveryDate: date, order: count++});
      total.ProductPrice = total.ProductPrice + object.ProductPrice;
      total.TaxPrice = total.TaxPrice + object.TaxPrice;
      total.Fees = total.Fees + object.Fees;
      total.TaxUnitPrice = total.TaxUnitPrice + object.TaxUnitPrice;
      total.OtherFee = total.OtherFee + object.OtherFee;
      total.DeliveryFee = total.DeliveryFee + object.DeliveryFee;
      total.EnvironmentalFee = total.EnvironmentalFee + object.EnvironmentalFee;
    }
    return 1;
  })  
  return total;
}

finalArray.map((object) => {
  object.uniqueOrder.map((order) => {
    const value = getOrderData(order);
      combineArray.push({...subTotal,CustomerName: object.arrayData.CustomerName, VendorName: object.arrayData.VendorName, ShipToName: object.arrayData.ShipToName, StateCode: object.arrayData.StateCode, CityName: object.arrayData.CityName, LocationType: object.arrayData.LocationType, Addr1: object.arrayData.Addr1 ,ProductPrice:value.ProductPrice,TaxPrice: value.TaxPrice, Fees: value.Fees, TaxUnitPrice: value.TaxUnitPrice, OtherFee: value.OtherFee, DeliveryFee: value.DeliveryFee, EnvironmentalFee: value.EnvironmentalFee})
      return 1;
  })
  return 1;
})

let looped = 1
let number = 1;
for (let i = 0; i < combineArray.length; i += looped) {
  let rowSpan = 1;
  looped = 1;
  for (let j = i + 1; j < combineArray.length; j++) {
    if (combineArray[i].CustomerName === combineArray[j].CustomerName && combineArray[i].VendorName === combineArray[j].VendorName && combineArray[i].ShipToName === combineArray[j].ShipToName && combineArray[i].CityName === combineArray[j].CityName && combineArray[i].StateCode === combineArray[j].StateCode && combineArray[i].LocationType === combineArray[j].LocationType && combineArray[i].Addr1 === combineArray[j].Addr1) {
      looped++;
      rowSpan++;
    } else {
      break;
    }
  }

  combineArray[i].discontinuedCellRowSpan =
    rowSpan === 1 ? (looped === 1 ? 1 : undefined) : rowSpan;
  combineArray[i].count = number++;
}

const rowRender = (trElement, props) => {
  const available = props.dataItem.OrderNumber === "SubTotal" ;
  const red = {
    color: "red",
    fontWeight: 600
  };
  const trProps = {
    style: available ? red : null,
  };
  return React.cloneElement(
    trElement,
    {
      ...trProps,
    },
    trElement.props.children
  );
};

function Span() {
  
  const [gridData, setGridData] = React.useState(combineArray);

  const cellRender = (cell, props) => {
    const { dataItem, field } = props;

    if (field === 'CustomerName' || field === 'VendorName' || field === 'ShipToName' || field === 'Addr1' ||
    field === 'CityName' || field === 'StateCode' || field === 'LocationType' || field === "count") {
      if (dataItem.discontinuedCellRowSpan) {
        return (
          <td
            {...cell.props}
            rowSpan={dataItem.discontinuedCellRowSpan}
            className = {dataItem.className || dataItem.discontinuedClassName}            
          >
            {cell.props.children}
          </td>
        );
        
      }else {
        return null;
      }
    }

    return (
      <td
        {...cell.props}
        className={dataItem.className}
        colSpan={props.colSpan}        
      >
        {cell.props.children}
      </td>
    );
  };

  const headerStyle = (props) => {
    return(
      <span style={{fontWeight: 700}}>{props.title}</span>
    )
  }

  const cellWithOrderNumber = (props) => {
    const style = {
      textAlign: "center",
      fontWeight: 600
    };
    const field = props.field || "";
    return (
      <td style={style}>
        {props.dataItem[field]}
      </td>
    );
  };

    return (
        <Grid
          style={{ height: '600px' }}
          data={gridData}
          cellRender={cellRender}
          rowRender={rowRender}
          sortable={true}
        >
          <Column field="count" title="#" width="80px" headerCell={headerStyle}/>
          <Column field='CustomerName' title='Customer Name' width="150px" headerCell={headerStyle}/>
          <Column field='VendorName' title='Vendor Name' width="150px"  headerCell={headerStyle}/>
          <Column field="ShipToName" title="Ship To Name" width="150px" headerCell={headerStyle}/>
          <Column field="Addr1" title="Address" width="150px" headerCell={headerStyle}/>
          <Column field="CityName" title="CityName" width="140px" headerCell={headerStyle}/>
          <Column field="StateCode" title="StateCode" width="100px" headerCell={headerStyle}/>
          <Column field="LocationType" title="Location Type" width="130px" headerCell={headerStyle}/>
          <Column field='order' title='Order Number' width="150px" headerCell={headerStyle} cell={cellWithOrderNumber}/>
          <Column field='OrderNumber' title="Order Id" width="120px" headerCell={headerStyle}/>
          <Column field="ProdDesc" title="Product Description" width="180px" headerCell={headerStyle}/>
          <Column field="DeliveryDate" title="Delivery Date" width="120px" headerCell={headerStyle}/>
          <Column field="FileName" title="File" width="350px" headerCell={headerStyle}/>
          <Column field="Gallons" title="Gallons" width="100px" headerCell={headerStyle}/>
          <Column field="ProductPrice" title="Product Price" width="140px" headerCell={headerStyle}/>
          <Column field="TaxPrice" title="Tax Price" width="120px" headerCell={headerStyle}/>
          <Column field="Latitude" title="Latitude" width="120px" headerCell={headerStyle}/>
          <Column field="Longitude" title="Longitude" width="120px" headerCell={headerStyle}/>
          <Column field="Fees" title="Fees" width="120px" headerCell={headerStyle}/>
          <Column field="AverageGross" title="Average Gross" width="120px" headerCell={headerStyle}/>
          <Column field="ProductID" title="Product ID" width="120px" headerCell={headerStyle}/>
          <Column field="ProductUnitPrice" title="Product Unit Price" width="120px" headerCell={headerStyle}/>
          <Column field="TaxUnitPrice" title="Tax Unit Price" width="120px" headerCell={headerStyle}/>
          <Column field="OtherFee" title="Other Fee" width="120px" headerCell={headerStyle}/>
          <Column field="DeliveryFee" title="Delivery Fee" width="120px" headerCell={headerStyle}/>
          <Column field="EnvironmentalFee" title="Environmental Fee" width="150px" headerCell={headerStyle}/>
          <Column field="PageNumber" title="Page Number" width="120px" headerCell={headerStyle}/>
          <Column field="TerminalGroupID" title="Terminal GroupID" width="150px" headerCell={headerStyle}/>
          <Column field="LoadingTime" title="Loading Time" width="120px" headerCell={headerStyle}/>
          <Column field="SiteSetupTime" title="SiteSetupTime" width="120px" headerCell={headerStyle}/>
          <Column field="CustomerID" title="Customer ID" width="120px" headerCell={headerStyle}/>
        </Grid>
    );
}
export default Span